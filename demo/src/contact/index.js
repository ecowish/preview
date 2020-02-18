import React from 'react';
import Config from '../config/config.json';

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            subcategory_options: []
        };

        this.subcategory_elem = React.createRef();
    }
    render() {
        var category_options = [];
        for (var i in Config.contactCategory) {
            var item = Config.contactCategory[i];
            category_options.push(
                <option value={item.value}>{item.caption}</option>
            );
        }

        return [
            <h1>Contact Us</h1>,
            <form>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <th><label for="category">Category *</label></th>
                                <td><select id="category" name="category" required onChange={(event) => {
                                    var subcategory_options = [];
                                    var category = Config.contactCategory[event.target.selectedIndex - 1].subcategory;
                                    for (var i in category) {
                                        var item = category[i];
                                        subcategory_options.push(
                                            <option value={item.value}>{item.caption}</option>
                                        )
                                    }

                                    this.setState({
                                        subcategory_options: subcategory_options
                                    });

                                    var subcategory_elem = this.subcategory_elem.current;
                                    subcategory_elem.disabled = (subcategory_options.length == 0);
                                    subcategory_elem.selectedIndex = 0;
                                }}>
                                    <option disabled selected>Select Category...</option>
                                    {category_options}
                                </select></td>
                                <td><select name="subcategory" disabled ref={this.subcategory_elem}>
                                    <option disabled selected>Select Category...</option>
                                    {this.state.subcategory_options}
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
                    <h2>개인정보 수집·이용에 대한 안내</h2>
                    <h3>필수 수집·이용 항목</h3>
                    <p>(문의접수와 처리 및 회신을 위하여 아래 정보가 필요합니다)</p>
                    <table>
                        <thead>
                            <tr>
                                <th>수집항목</th>
                                <th>목적</th>
                                <th>보유&middot;보관기간</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>이메일 주소</td>
                                <td><ul>
                                    <li>고객문의 및 상담요청에 대한 회신</li>
                                    <li>상담을 위한 서비스 이용기록 조회</li></ul></td>
                                <td>문의 접수 후 3년 간</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>더 자세한 내용은 <a href="neuroassociates.co.kr">개인정보보호정책</a>을 참조하시기 바랍니다.</p>
                    <p><input type="checkbox" id="agreePrivacy" required /><label for="agreePrivacy">위 내용에 동의합니다.</label></p>
                </div>
                <p style={{ textAlign: "right" }}><button type="submit">Submit</button></p>
            </form>
        ];
    }
}

export default Contact;