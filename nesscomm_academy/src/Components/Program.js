import React, { useState } from "react";
import ProgramImage1 from '../Assets/program-1.svg'
import ProgramImage2 from '../Assets/program-2.svg'
import ProgramImage3 from '../Assets/program-3.svg'
import ProgramImage4 from '../Assets/program-4.svg'
import ProgramImage5 from '../Assets/program-5.svg'
import ProgramImage6 from '../Assets/program-6.svg'

const Program = () => {
    const [selectedItem, setSelectedItem] = useState(1);
    const [selectedItemDetails, setSelectedItemDetails] = useState("Details for Item 1"); // Initialize selectedItemDetails with the details of "PELATIHAN DIGITAL UNTUK GURU"
    const [selectedItemTitle, setSelectedItemTitle] = useState("PELATIHAN DIGITAL UNTUK GURU"); // Initialize selectedItemTitle with the title of "PELATIHAN DIGITAL UNTUK GURU"

    // Dummy data for the items
    const items = [
        { id: 1, title: "PELATIHAN DIGITAL UNTUK GURU", details: "Details for Item 1", image: ProgramImage1 },
        { id: 2, title: "PELATIHAN KOMUNIKASI EFEKTIF", details: "Details for Item 2", image: ProgramImage2 },
        { id: 3, title: "PELATIHAN KETERAMPILAN DIGITAL", details: "Details for Item 3", image: ProgramImage3 },
        { id: 4, title: "PELATIHAN LEADERSHIP & COLLABORATING", details: "Details for Item 4", image: ProgramImage4 },
        { id: 5, title: "PELATIHAN MENJADI CONTENT CREATOR", details: "Details for Item 5", image: ProgramImage5 },
        { id: 6, title: "PELATIHAN PUBLIC SPEAKING", details: "Details for Item 6", image: ProgramImage6 },
    ];

    // Function to handle item click
    const handleItemClick = (id, title, details, image) => {
        setSelectedItem(id === selectedItem ? null : id); // Toggle visibility of details
        setSelectedItemTitle(id === selectedItem ? null : title); // Update title for selected item
        setSelectedItemDetails(id === selectedItem ? null : details); // Update details for selected item
    };

    return (
        <div className="about-section-container">
            <div className="about-section-text-container">
                <h1 className="about-heading">PROGRAM PELATIHAN</h1>
            </div>
            <div className="box-border">
                <h2 className="program-title">{selectedItemTitle}</h2>
                <p className="program-desc">{selectedItemDetails}</p>
                <div className="box-container">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className={`box ${selectedItem === item.id ? "selected" : ""}`}
                            onClick={() => handleItemClick(item.id, item.title, item.details, item.image)} // Pass title, details, and image to handleItemClick
                        >
                            <img src={item.image} alt={item.title} />
                            <h3>{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Program;
