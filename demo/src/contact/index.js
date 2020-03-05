import React from 'react';
import Config from '../config/config.json';
import { Markdown } from '../md';
import privacyContact from '../md/privacy.contact.md';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import $ from 'jquery';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import './contact.css';

import creds from '../credential/google.sheets.json';

class Contact extends React.Component {
    sheet_id = "1TSzzcLO6PfS5-Va5SyNkEL5u0BllIxF3LzGe4JHmvAI";

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            category_idx: -1,
            subcategory_idx: -1,
            privacyContact_content: ""
        };

        this.subcategory_elem = React.createRef();
        this.category_elem = React.createRef();
    }

    componentDidMount() {
        fetch(privacyContact)
            .then(res => res.text())
            .then((result) => {
                this.setState({
                    privacyContact_content: result
                });
            }, (error) => {
                console.error(error);
            });
        
        if (this.props.match && this.props.match.params.category) {
            var category_idx = Config.contactCategory.findIndex((elem) => elem.value == this.props.match.params.category);
            this.category_elem.current.selectedIndex = category_idx + 1;
            this.onCategoryChanged({target: this.category_elem.current});

            if(category_idx > -1 && this.props.match.params.subcategory) {
                console.log(this.props.match.params.subcategory, Config.contactCategory[category_idx].subcategory.findIndex((elem) => elem.value == this.props.match.params.subcategory) + 1)
                this.setState({
                    subcategory_idx: Config.contactCategory[category_idx].subcategory.findIndex((elem) => elem.value == this.props.match.params.subcategory) + 1
                });
            }
        }
    }

    async onSubmit() {
        if(this.category_elem.current.selectedIndex == 0) return alert("카테고리를 선택해주세요");
        if(!this.subcategory_elem.current.disabled && this.subcategory_elem.current.selectedIndex == 0) return alert("서브카테고리를 선택해주세요");

        var category_elem = (Config.contactCategory.length >= this.category_elem.current.selectedIndex)?Config.contactCategory[this.category_elem.current.selectedIndex - 1]:null;
        var category = (category_elem)?category_elem.caption:"기타";
        var subcategory_elem = (!this.subcategory_elem.current.disabled && category_elem)?category_elem.subcategory[this.subcategory_elem.current.selectedIndex - 1]:null;
        var subcategory = (subcategory_elem)?subcategory_elem.caption:"기타";

        const doc = new GoogleSpreadsheet(this.sheet_id);

        await doc.useServiceAccountAuth(creds);

        await doc.loadInfo(); // loads document properties and worksheets
        const sheet = doc.sheetsByIndex[0];
        await sheet.addRow({ datetime: new Date().toLocaleString(), category: category, subcategory: subcategory, email: $("#email").val(), content: $("#content").val() });

        alert("전달되었습니다.");

        $("#contact_form")[0].reset();
        this.category_elem.current.selectedIndex = 0;
        this.onCategoryChanged({target: this.category_elem.current});
    }

    onCategoryChanged(event) {
        this.setState({
            category_idx: event.target.selectedIndex - 1,
            subcategory_idx: 0
        });

        var subcategory_elem = this.subcategory_elem.current;
        var currentContactCategory = Config.contactCategory[event.target.selectedIndex - 1];
        subcategory_elem.disabled = !(currentContactCategory && currentContactCategory.subcategory && currentContactCategory.subcategory.length);
    }

    componentDidUpdate() {
        this.subcategory_elem.current.selectedIndex = this.state.subcategory_idx;
    }

    render() {
        return <section>
            <h1>문의하기</h1>
            <form id="contact_form" onSubmit={(e) => {e.preventDefault(); this.onSubmit();}}>
                <div id="contact_form_content">
                    <table>
                        <tbody>
                            <tr>
                                <th><label for="category">카테고리 *</label></th>
                                <td><select id="category" name="category" required onChange={(e) => {this.onCategoryChanged(e);}} ref={this.category_elem}>
                                    <option value="select" disabled selected>카테고리 선택</option>
                                    {
                                        Config.contactCategory.map((item) => (
                                            <option value={item.value}>{item.caption}</option>
                                        ))
                                    }
                                    <option value="other">기타</option>
                                </select></td>
                                <td><select name="subcategory" disabled ref={this.subcategory_elem}>
                                    <option value="select" disabled selected>카테고리 선택</option>
                                    {
                                        (() => {
                                            var currentContactCategory = Config.contactCategory[this.state.category_idx];
                                            return (currentContactCategory && currentContactCategory.subcategory) &&
                                                currentContactCategory.subcategory.map((item) => (
                                                    <option value={item.value}>{item.caption}</option>
                                                ))
                                        })()
                                    }
                                    <option value="other">기타</option>
                                </select>
                                </td>
                            </tr>
                            <tr>
                                <th><label for="email">이메일 *</label></th>
                                <td colspan="2"><input type="email" name="email" id="email" required /></td>
                            </tr>
                            <tr>
                                <th><label for="content">문의내용 *</label></th>
                                <td colspan="2"><textarea id="content" name="content" required></textarea></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div id="contact_privacy">
                    <Markdown source={this.state.privacyContact_content} />
                    <p><input type="checkbox" id="agreePrivacy" required /><label for="agreePrivacy">위 내용에 동의합니다.</label></p>
                </div>
                <p style={{ textAlign: "right" }}><button type="submit" class="default">Submit</button></p>
            </form>
            </section>;
    }
}

export default withRouter(Contact);