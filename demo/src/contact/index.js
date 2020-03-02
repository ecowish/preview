import React from 'react';
import Config from '../config/config.json';
import { Markdown } from '../md';
import privacyContact from '../md/privacy.contact.md';

import './contact.css';

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            category_idx: -1,
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
    }

    render() {
        return <section>
            <h1>문의하기</h1>
            <form id="contact_form">
                <div id="contact_form_content">
                    <table>
                        <tbody>
                            <tr>
                                <th><label for="category">카테고리 *</label></th>
                                <td><select id="category" name="category" required onChange={(event) => {
                                    this.setState({
                                        category_idx: event.target.selectedIndex - 1
                                    });

                                    var subcategory_elem = this.subcategory_elem.current;
                                    var currentContactCategory = Config.contactCategory[event.target.selectedIndex - 1];
                                    subcategory_elem.disabled = !(currentContactCategory && currentContactCategory.subcategory && currentContactCategory.subcategory.length);
                                    subcategory_elem.selectedIndex = 0;
                                }} ref={this.category_elem}>
                                    <option disabled selected>카테고리 선택</option>
                                    {
                                        Config.contactCategory.map((item) => (
                                            <option value={item.value}>{item.caption}</option>
                                        ))
                                    }
                                    <option value="other">기타</option>
                                </select></td>
                                <td><select name="subcategory" disabled ref={this.subcategory_elem}>
                                    <option disabled selected>카테고리 선택</option>
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
                <p style={{ textAlign: "right" }}><button type="submit">Submit</button></p>
            </form>
            </section>;
    }
}

export default Contact;