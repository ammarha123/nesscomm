import React from "react";
import KualitasImage from '../Assets/kualitas.svg'
import InovasiImage from '../Assets/inovasi.svg'
import KolaborasiImage from '../Assets/kolaborasi.svg'

const Value = () => {
  return (
    <div className="about-section-container">
      <div className="about-section-text-container">
        <h1 className="about-heading">
          VALUE
        </h1>
      </div>
      <div className="column-container">
        <div className="column">
          <h2>Kualitas</h2>
          <p>Kami berkomitmen untuk terus memberikan pelatihan berkualitas dengan materi yang relevan dan terkini agar semakin berkembang</p>
          <img className="value-image" src={KualitasImage} alt="" />
        </div>
        <div className="column">
          <h2>Inovasi</h2>
          <p>Kami selalu mencari cara baru untuk meningkatkan program pelatihan dan mengikuti perkembangan terbaru dalam dunia pendidikan</p>
          <img className="value-image" src={InovasiImage} alt="" />
        </div>
        <div className="column">
          <h2>Kolaborasi</h2>
          <p>Kami mendorong kolaborasi dan sharing ideantara guru dan siswa untuk menciptakan lingkungan belajar yang saling mendukung</p>
          <img className="value-image" src={KolaborasiImage} alt="" />
        </div>
      </div>
      <h1 className="about-heading">
          KAMI PERCAYA
        </h1>
        <h1 className="about-heading">
          KITA BISA MENJADI YANG TERBAIK
        </h1>
    </div>
  );
};

export default Value;