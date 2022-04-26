
import React from "react";
import '../../acsets/sass/footer.scss'

class Footer extends React.Component {
    render() {
        return (
            <footer className="bg-light text-center text-lg-start">
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2020 Copyright:
                    <a className="text-dark" href="/"> By Nguyễn Thành Công</a>
                </div>
            </footer >
        )
    }
}
export default Footer