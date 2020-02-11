import React from 'react';
import MailForm from '../components/form';
import HeroImage from '../components/hero-image';
import ComingSoonHeader from '../layout/coming-soon-header';
import Content from '../components/content';


class ComingSoon extends React.Component {
    render () {
        return (
            <div className="comingSoon">
                <ComingSoonHeader />
                <HeroImage />
                <Content />
                <MailForm />
            </div>
        );
    }
}; 

export default ComingSoon

