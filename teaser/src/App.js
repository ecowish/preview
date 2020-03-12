import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    render() {
        return <main>
            <section>
                <h1>에코위시</h1>
                <h2>ECOWISH</h2>
            </section>
            <section>
                <h1>간단한 소개</h1>
            </section>
            <section>
                <h1>에코위시 유튜브 채널</h1>
                <h2>이러이러한 채널입니다</h2>
            </section>
            <section>
                <h1>에코위시 유튜브 채널</h1>
                <div>
                    <div>
                        <iframe src="https://www.youtube.com/embed/Hr8n9lmFOG4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div>
                        <p>이러이러한 영상을 만듭니다.</p>
                    </div>
                </div>
            </section>
            <section>
                <h1>에코위시 사이트</h1>
                <h2>이러이러한 사이트입니다</h2>
            </section>
            <section>
                <h1>슬기로운 분리배출</h1>
                <div>
                    <div>
                        <img src="" alt="스크린샷" />
                    </div>
                    <div>
                        <p>이러이러한 사이트입니다.</p>
                    </div>
                </div>
            </section>
            <section>
                <h1>편리한 에코 분야별 순위</h1>
                <div>
                    <div>
                        <img src="" alt="스크린샷" />
                    </div>
                    <div>
                        <p>이러이러한 사이트입니다.</p>
                    </div>
                </div>
            </section>
            <section>
                <h1>이 사람들이 만듭니다</h1>
                <ul>
                    <li>멤버 개인 소개</li>
                </ul>
            </section>
            <section>
                <h1>여러분들의 참여를 기다립니다</h1>
                <form>
                    (폼)
                </form>
            </section>
        </main>;
    }
}

export default App;
