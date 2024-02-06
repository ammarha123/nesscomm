import React from "react";
import { AiFillStar } from "react-icons/ai";
import BantuanImage from "../Assets/bantuan.svg"


const Bantuan = () => {
  return (
        <div className="bantuan-section-wrapper" style={{ display: "flex" }}>
          <div className="bantuan-section-top" style={{ flex: "1" }}>
        <h1 className="primary-heading">BUTUH BANTUAN?</h1>
        <p className="primary-text">
        Jangan ragu untuk menghubungi kami. Kirimkan pesan anda kepada kami dengan mengisi form yang telah disediakan. Kami akan segera membalas pesan anda.
        </p>
        {/* <img src={BantuanImage} alt="" /> */}
      </div>
      <div className="bantuan-form" style={{ flex: "1" }}>
          <form>
            <div className="form-group">
              <input type="text" id="name" placeholder="Name" name="name" required />
            </div>
            <div className="form-group">
              <input type="email" id="email" placeholder="Email" name="email" required />
            </div>
            <div className="form-group">
              <input type="tel" id="phone" placeholder="Nomor HP" name="phone" required />
            </div>
            <div className="form-group">
              <textarea id="message" name="message" placeholder="Pesan" rows="4" required></textarea>
            </div>
            <button type="submit">Kirim</button>
          </form>
        </div>
    </div>
  );
};

export default Bantuan;