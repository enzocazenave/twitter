import { LeftBar, CenterBar, RightBar } from './components/';

export const App = () => {
    return (
        <div className="row">
            <div className="col-2">
                <LeftBar />
            </div>
            <div className="col-6">
                <CenterBar />
            </div>
            <div className="col-4">
                <RightBar />
            </div>
        </div>
    )
}