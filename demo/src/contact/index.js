import React from 'react';
import Config from '../config/config.json';
import { Markdown } from '../md';
import privacyContact from '../md/privacy.contact.md';

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
        return [
            <h1>Contact Us</h1>,
            <form>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <th><label for="category">Category *</label></th>
                                <td><select id="category" name="category" required onChange={(event) => {
                                    this.setState({
                                        category_idx: event.target.selectedIndex - 1
                                    });

                                    var subcategory_elem = this.subcategory_elem.current;
                                    subcategory_elem.disabled = (Config.contactCategory[event.target.selectedIndex - 1].subcategory.length == 0);
                                    subcategory_elem.selectedIndex = 0;
                                }} ref={this.category_elem}>
                                    <option disabled selected>Select Category...</option>
                                    {
                                        Config.contactCategory.map((item) => (
                                            <option value={item.value}>{item.caption}</option>
                                        ))
                                    }
                                </select></td>
                                <td><select name="subcategory" disabled ref={this.subcategory_elem}>
                                    <option disabled selected>Select Category...</option>
                                    {
                                        (Config.contactCategory[this.state.category_idx] && Config.contactCategory[this.state.category_idx].subcategory) && 
                                        Config.contactCategory[this.state.category_idx].subcategory.map((item) => (
                                                <option value={item.value}>{item.caption}</option>
                                            ))
                                    }
                                </select>
                                </td>
                            </tr>
                            <tr>
                                <th><label for="email">E-Mail *</label></th>
                                <td colspan="2"><input type="email" name="email" id="email" required /></td>
                            </tr>
                            <tr>
                                <th><label for="content">Content *</label></th>
                                <td colspan="2"><textarea id="content" name="content" required></textarea></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <Markdown source={this.state.privacyContact_content} />
                    <p><input type="checkbox" id="agreePrivacy" required /><label for="agreePrivacy">위 내용에 동의합니다.</label></p>
                </div>
                <p style={{ textAlign: "right" }}><button type="submit">Submit</button></p>
            </form>
        ];
    }
}

export default Contact;