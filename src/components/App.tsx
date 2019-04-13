import * as React from 'react';
import MainSection from '../components/MainSection';
import Header from '../containers/Header';

const component: React.SFC = () => {
    return (
        <div>
            <Header />
            <MainSection />
        </div>
    );
};

// export時に指定がなければこれがimportされる.コメントは//空白でスタート
export default component;
