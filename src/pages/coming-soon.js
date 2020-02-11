import React from 'react';
import MailForm from '../components/form';
import HeroMobile from '../components/hero-image';
import HeroDesktop from '../components/hero-desktop';
import ComingSoonHeader from '../layout/coming-soon-header';
import Content from '../components/content';


class ComingSoon extends React.Component {
    render () {
        return (
            <div className="comingSoon">
                <ComingSoonHeader />
                <HeroMobile />
                <HeroDesktop />
                <Content />
                <MailForm />
            </div>
        );
    }
}; 

export default ComingSoon

