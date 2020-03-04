import React from 'react';
import { Link } from 'react-router-dom';

import './banner.css';

class ContributeBanner extends React.Component {
    render() {
        return <div class="contribute_banner">
            <h1>여러분의 도움이 필요합니다!</h1>
            <p>이 프로젝트를 함께 키워가고 싶으시다면 기여자 등록 신청을 해주세요.</p>
            <Link to="/contact/collaboration/contributor"><button>기여자 등록 신청하러 가기 <i class="material-icons inline">chevron_right</i></button></Link>
        </div>;
    }
}

export default ContributeBanner;