import React, { useEffect, useRef, useState } from "react";

import Input from "../../components/Input";
import Button from "../../components/Button";
import {
  CogIcon,
  EarthIcon,
  ElectricityIcon,
  SearchIcon,
  UpDownArrowIcon,
  VehicleIcon,
} from "../../components/Svg";

import "./styles/Filter.scss";

const FILTERS = {
  type: {
    icon: VehicleIcon,
    label: "Loại xe",
    childs: [
      {
        label: "4 chỗ (Mini)",
        img: "https://n1-cstg.mioto.vn/m/vehicle-types/4-mini-v2.png",
      },
      {
        label: "4 chỗ (Sedan)",
        img: "https://n1-cstg.mioto.vn/m/vehicle-types/4-sedan-v2.png",
      },
      {
        label: "4 chỗ (Hatchback)",
        img: "https://n1-cstg.mioto.vn/m/vehicle-types/4-hatchback-v2.png",
      },
      {
        label: "5 chỗ (CUC Gầm cao)",
        img: "https://n1-cstg.mioto.vn/m/vehicle-types/5-suv-v2.png",
      },
      {
        label: "7 chỗ (SUV Gầm cao)",
        img: "https://n1-cstg.mioto.vn/m/vehicle-types/7-suv-v2.png",
      },
      {
        label: "7 chỗ (MPV Gầm thấp)",
        img: "https://n1-cstg.mioto.vn/m/vehicle-types/7-mpv-v2.png",
      },
      {
        label: "Bán tải",
        img: "https://n1-cstg.mioto.vn/m/vehicle-types/pickup-v2.png",
      },
    ],
  },
  automaker: {
    icon: EarthIcon,
    label: "Hãng xe",
    childs: [
      {
        label: "Audi",
        img: "https://n1-cstg.mioto.vn/m/vehicle-makes/Audi.png",
      },
      {
        label: "Baic",
        img: "https://n1-cstg.mioto.vn/m/vehicle-makes/Baic.png",
      },
      {
        label: "BMW",
        img: "https://n1-cstg.mioto.vn/m/vehicle-makes/BMW.png",
      },
      {
        label: "Chevrolet",
        img: "https://n1-cstg.mioto.vn/m/vehicle-makes/Chevrolet.png",
      },
      {
        label: "Daewoo",
        img: "https://n1-cstg.mioto.vn/m/vehicle-makes/Daewoo.png",
      },
      {
        label: "Ford",
        img: "https://n1-cstg.mioto.vn/m/vehicle-makes/Ford.png",
      },
      {
        label: "Honda",
        img: "https://n1-cstg.mioto.vn/m/vehicle-makes/Honda.png",
      },
      {
        label: "Hyundai",
        img: "https://n1-cstg.mioto.vn/m/vehicle-makes/Hyundai.png",
      },
      {
        label: "Isuzu",
        img: "https://n1-cstg.mioto.vn/m/vehicle-makes/Isuzu.png",
      },
      {
        label: "Kia",
        img: "https://n1-cstg.mioto.vn/m/vehicle-makes/Kia.png",
      },
      {
        label: "Land-Rover",
        img: "https://n1-cstg.mioto.vn/m/vehicle-makes/Land-Rover.png",
      },
      {
        label: "Luxgen",
        img: "https://n1-cstg.mioto.vn/m/vehicle-makes/Luxgen.png",
      },
      {
        label: "Mazda",
        img: "https://n1-cstg.mioto.vn/m/vehicle-makes/Mazda.png",
      },
      {
        label: "Mercedes",
        img: "https://n1-cstg.mioto.vn/m/vehicle-makes/Mercedes.png",
      },
      {
        label: "Mitsubishi",
        img: "https://n1-cstg.mioto.vn/m/vehicle-makes/Mitsubishi.png",
      },
      {
        label: "Nissan",
        img: "https://n1-cstg.mioto.vn/m/vehicle-makes/Nissan.png",
      },
      {
        label: "Peugeot",
        img: "https://n1-cstg.mioto.vn/m/vehicle-makes/Peugeot.png",
      },
      {
        label: "Porsche",
        img: "https://n1-cstg.mioto.vn/m/vehicle-makes/Porsche.png",
      },
      {
        label: "Suzuki",
        img: "https://n1-cstg.mioto.vn/m/vehicle-makes/Suzuki.png",
      },
      {
        label: "Toyota",
        img: "https://n1-cstg.mioto.vn/m/vehicle-makes/Toyota.png",
      },
      {
        label: "Vinfast",
        img: "https://n1-cstg.mioto.vn/m/vehicle-makes/Vinfast.png",
      },
    ],
  },
  electricity: {
    icon: ElectricityIcon,
    label: "Xe điện",
  },
  transmission: {
    icon: CogIcon,
    label: "Truyền động",
    childs: [
      {
        label: "Tất cả",
      },
      {
        label: "Số sàn",
      },
      {
        label: "Số tự động",
      },
    ],
  },
  price: {
    icon: UpDownArrowIcon,
    label: "Sắp xếp theo giá",
    childs: [
      {
        label: "Tăng dần",
      },
      {
        label: "Giảm dần",
      },
    ],
  },
};

const Filter = () => {
  const [hoveredType, setHoveredType] = useState(null);

  return (
    <div className="Filter">
      <div className="top-section">
        <Input
          className="filter-input"
          placeholder="Hãy nhập thông tin tìm kiếm ..."
          type="text"
          startIcon={<SearchIcon width="24" />}
        />
        <div className="filter-btns">
          {Object.keys(FILTERS).map((type) => {
            const { label, icon } = FILTERS[type];
            return (
              <Button
                startIcon={icon()}
                variant="outline"
                className="filter-btn"
                key={label}
              >
                {label}
              </Button>
            );
          })}
        </div>
      </div>
      <div className="filter-section">
        {Object.keys(FILTERS).map((type) => {
          const { childs } = FILTERS[type];
          const buttonClass = `filter-child-btn btn-${type}`;

          if (!childs) return null;
          return (
            <div
              key={type}
              className={`filter-child-section ${type} ${
                hoveredType === type ? "active" : ""
              }`}
            >
              {childs.map((child) => {
                const { label, img } = child;
                return (
                  <Button variant="outline" className={buttonClass} key={label}>
                    {img && <img src={img} alt={buttonClass} />}
                    {label}
                  </Button>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
