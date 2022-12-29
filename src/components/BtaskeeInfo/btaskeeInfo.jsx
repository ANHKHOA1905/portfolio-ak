import React from 'react';
import {faGem, faArrowAltCircleUp, faUserLarge} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './_btaskeeInfo.scss'
import SlideShow from "../SlideShow/SlideShow";


const MyComponent = () => {
    return (<div>
        <div className="btaskee">
            <div style={{
                color: '#fff',
                lineHeight: 2
            }}>
                <h1>Làm việc tại Btaskee từ 2022</h1>
                <h1>Thông tin công ty</h1>
            </div>
            <SlideShow/>
            <div className="btaskee__overview">
                <h1>Chúng tôi là bTaskee</h1>
                <p>Công ty TNHH bTaskee được thành lập vào ngày 30 tháng 03 năm 2016 bởi CEO – Founder <a
                    href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQEyf0bPvHd5pgAAAYVX30SAHH6FkVSSaddULJ8PgU0G6TBN2OxPdIpISMwRp9aC7mSqcHVc0m4DNXKLSn6dzMoSyuvG6MyTnSeOOOTs1Eus2ykuZ0BRrmr3chcLZc4onyHB-Gs=&original_referer=https://www.btaskee.com/&sessionRedirect=https%3A%2F%2Fvn.linkedin.com%2Fin%2Fnathan-do-92625211b"><span
                    style={{color: 'orange'}}>Nathan Do</span></a> (Đỗ Đắc
                    Nhân Tâm).

                    bTaskee là doanh nghiệp tiên phong trong việc ứng dụng công nghệ vào ngành giúp việc nhà ở Việt Nam.
                    Chúng tôi cung cấp đa dịch vụ tiện ích như: dọn dẹp nhà, vệ sinh máy lạnh, đi chợ, … tại Đông Nam Á.
                    Thông qua ứng dụng đặt lịch dành cho khách hàng bTaskee và ứng dụng nhận việc của cộng tác viên
                    bTaskee Partner, khách hàng và cộng tác viên có thể chủ động đăng và nhận việc trực tiếp trên ứng
                    dụng.

                </p>
            </div>
            <div className="btaskee__mission">
                <div className="btaskee__mission__txt">
                    <h1>Ý nghĩa của bTaskee</h1>
                    <p>Tên gọi bTaskee lấy cảm hứng từ hình ảnh những chú ong chăm chỉ (bee) để nói về các chị cộng tác
                        viên
                        giúp việc luôn hoàn thành tốt công việc (Task) được giao. Họ (bTasker) - những chú ong siêng
                        năng,
                        chăm chỉ và cần mẫn - sẽ cung cấp cho khách hàng những dịch vụ chất lượng cao một cách tiện lợi
                        và
                        nhanh chóng.
                    </p>
                </div>
                <div className="btaskee__mission__img">
                    <img src={`../../img-location.png`} alt=""/>

                </div>
                <div className="btaskee__mission__img">
                    <img src={`../../img-mission.png`} alt=""/>
                </div>
                <div className="btaskee__mission__txt">
                    <h1>Khu vực hoạt động</h1>
                    <p>Hiện tại, bTaskee cung cấp các dịch vụ tiện ích cho nhiều hộ gia đình ở khắp 10 tỉnh thành phố
                        lớn tại Việt Nam: Hà Nội, Hải Phòng, Đà Nẵng, Hội An, Nha Trang, Đà Lạt, Bình Dương, Biên Hòa,
                        TP.HCM và Cần Thơ. Ngoài ra, bTaskee đang mở rộng ra thị trường nước ngoài với dịch vụ chính là
                        giúp việc nhà theo giờ tại Thái Lan và Malaysia.
                    </p>
                </div>
                <div className="btaskee__mission__txt">
                    <h1>Phát triển nhiều hơn nữa</h1>
                    <p>Tại Việt Nam, tính đến nay, bTaskee đã giúp hơn 7000 người giúp việc có thu nhập ổn định và đáp
                        ứng nhu cầu chăm sóc nhà cửa cho hơn 350,000 khách hàng. Với mục tiêu mang đến cho khách hàng
                        những trải nghiệm dịch vụ tốt nhất, bTaskee không ngừng cải thiện chất lượng dịch vụ, ứng dụng.
                    </p>
                </div>
                <div className="btaskee__mission__img">
                    <img src={`../../img-worker.png`} alt=""/>

                </div>
            </div>
            <div className="btaskee__happy-family">
                <img src={`../../img-family.png`} alt=""/>
            </div>
            <div className="btaskee__vision">
                <div className="btaskee__vision__element">
                    <div className="element-txt">
                        <h1>Tầm nhìn</h1>
                        <p>Không chỉ muốn giúp bạn chăm sóc gia đình từ những dịch vụ dọn dẹp nhà, vệ sinh máy lạnh, nấu
                            ăn
                            gia đình, giặt ủi,... bTaskee đang nỗ lực trở thành công ty hàng đầu Việt Nam và vươn ra thị
                            trường Đông Nam Á, cung cấp nhiều hơn những dịch vụ tiện ích gia đình tích hợp trên ứng dụng
                            di
                            động.</p>
                    </div>
                    <div className="element-img">
                        <img src={`../../img-binoculars.png`} alt=""/>
                    </div>
                </div>
                <div className="btaskee__vision__element">
                    <div className="element-txt">
                        <h1>Sứ mệnh</h1>
                        <p>bTaskee ra đời với sứ mệnh đáp ứng nhu cầu giải quyết việc nhà của người dân đô thị và nâng
                            cao
                            giá trị nghề giúp việc nhà bằng cách xây dựng nguồn nhân lực giúp việc bài bản, chuyên
                            nghiệp và
                            tận tâm. Cuộc sống thảnh thơi khi nhẹ đi gánh nặng việc nhà của khách hàng và nguồn thu nhập
                            ổn
                            định của người lao động chính là những gì mà chúng tôi luôn hướng đến.
                        </p>
                    </div>
                    <div className="element-img">
                        <img src={`../../img-building.png`} alt=""/>
                    </div>
                </div>
            </div>
            <div className="btaskee__core-value">
                <h1>Giá trị cốt lõi</h1>
                <img src={`../../img-corevalue.png`} alt=""/>
                <div className="btaskee__core-value__content">
                    <div className="content-element">
                        <FontAwesomeIcon className="icon" icon={faGem}/>
                        <h3>Chất lượng</h3>
                        <p>Đảm bảo chất lượng dịch vụ cho khách hàng. Tất cả các bTasker của chúng tôi đều phải có kinh
                            nghiệm và trải qua chương trình đào tạo, kiểm tra, thử việc nghiêm ngặt.</p>
                    </div>
                    <div className="content-element">
                        <FontAwesomeIcon className="icon" icon={faUserLarge}/>
                        <h3>Tận tâm</h3>
                        <p>Luôn đặt mình vào vị trí của khách hàng để mang lại hiệu quả công việc tốt nhất.
                        </p>
                    </div>
                    <div className="content-element">
                        <FontAwesomeIcon className="icon" icon={faArrowAltCircleUp}/>
                        <h3>Tiện lợi</h3>
                        <p>Ứng dụng nhanh chóng tiện lợi để đặt và nhận việc mọi lúc mọi nơi. Chỉ mất 60 giây để đăng
                            việc, giờ làm việc vô cùng linh hoạt.
                        </p>
                    </div>
                    <div className="content-element">
                        <FontAwesomeIcon className="icon" icon={faArrowAltCircleUp}/>
                        <h3>Cải tiến</h3>
                        <p>Chúng tôi luôn lắng nghe để không ngừng cải tiến công nghệ, đổi mới chính sách, vì trải
                            nghiệm trọn vẹn của người dùng là đích đến của chúng tôi.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>);
};

export default MyComponent;
