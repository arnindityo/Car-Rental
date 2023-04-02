import React from "react";
import './section2.css';
import img from '../img_service.png';

function Section2() {
    return(
        <div className="container section2">
            <div className="row">
                <div className="col-lg-6">
                    <img src={img} alt="Mba" id="woman" style={{width: "75%"}} />
                </div>

                <div className="col-lg-6">
                    <h2>Best Car Rental for any kind of trip in JAKARTA!</h2>
                    <br />
                    <h6>
                        Sewa mobil di JAKARTA bersama Binar Car Rental jaminan harga
                        lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                        kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
                        meeting, dll.
                    </h6>

                    <br />

                    <div className="checklist">
                        <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <circle cx="12" cy="12" r="12" fill="#CFD4ED" />
                        <path
                            d="M17.3333 8L9.99996 15.3333L6.66663 12"
                            stroke="#0D28A6"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        </svg>
                        <h6>Sewa Mobil Dengan Supir di Bali 12 Jam</h6>
                    </div>

                    <div className="checklist">
                        <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <circle cx="12" cy="12" r="12" fill="#CFD4ED" />
                        <path
                            d="M17.3333 8L9.99996 15.3333L6.66663 12"
                            stroke="#0D28A6"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        </svg>
                        <h6>Sewa Mobil Lepas Kunci di Bali 24 Jam</h6>
                    </div>

                    <div className="checklist">
                        <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <circle cx="12" cy="12" r="12" fill="#CFD4ED" />
                        <path
                            d="M17.3333 8L9.99996 15.3333L6.66663 12"
                            stroke="#0D28A6"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        </svg>
                        <h6>Sewa Mobil Jangka Panjang Bulanan</h6>
                    </div>

                    <div className="checklist">
                        <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <circle cx="12" cy="12" r="12" fill="#CFD4ED" />
                        <path
                            d="M17.3333 8L9.99996 15.3333L6.66663 12"
                            stroke="#0D28A6"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        </svg>
                        <h6>Gratis Antar - Jemput Mobil di Bandara</h6>
                    </div>

                    <div className="checklist">
                        <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <circle cx="12" cy="12" r="12" fill="#CFD4ED" />
                        <path
                            d="M17.3333 8L9.99996 15.3333L6.66663 12"
                            stroke="#0D28A6"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        </svg>
                        <h6>Layanan Airport Transfer / Drop In Out</h6>
                    </div>
                </div>
            </div>
        </div>     
)
}

export default Section2;