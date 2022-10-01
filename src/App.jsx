import { LeftBar, CenterBar, RightBar } from './components/';

export const App = () => {
    return (
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
    )
}