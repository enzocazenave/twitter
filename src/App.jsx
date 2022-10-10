import { useEffect } from 'react';
import { LeftBar, CenterBar, RightBar } from './components/';
import { useTweetsContext } from './hooks/useTweetsContext';

export const App = () => {

    const { getTweets } = useTweetsContext();

    useEffect(() => { getTweets() }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-2 leftbar-container">
                    <LeftBar />
                </div>
                <div className="col centerbar-container">
                    <CenterBar />
                </div>
                <div className="col-4 xs rightbar-container">
                    <RightBar />
                </div>
            </div>
        </div>
    )
}