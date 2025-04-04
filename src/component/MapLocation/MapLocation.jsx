import React from "react";
import storesData from "../../data/stores.json";
import "./MapLocation.css";

const MapLocation = () => {
    const { stores } = storesData;

    return (
        <div className="location_stores">
            <h2>Hệ thống địa chỉ làm việc</h2>
            <div className="store_list">
                {stores.map(store=>(
                    <div 
                        key={store.id}
                        className="store_item"
                    >
                        <h3>{store.name}</h3>
                        <div className="store_info">
                            <p><strong>Địa chỉ: </strong>{store.address}</p>
                            <p><strong>Điện thoại: </strong>{store.phone}</p>
                        </div>
                        <div className="map_frame">
                            <iframe
                                title={`Bản đồ ${store.name}`}
                                src={store.mapUrl}
                                width="100%"
                                height="300"
                                style={{border: 0}}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            >
                            </iframe>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MapLocation;
