import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TheatersOutlinedIcon from "@mui/icons-material/TheatersOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import TheaterComedyOutlinedIcon from "@mui/icons-material/TheaterComedyOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import joker from "../images/joker.webp";
import fire from "../images/fire.webp";
import dikap from "../images/dikap.webp";

const listHeaderBottom = [
  {
    icon: <HomeOutlinedIcon />,
    top: "خانه",
    bottom: "HOME",
  },
  {
    icon: <TheatersOutlinedIcon />,
    top: "دانلود فیلم",
    bottom: "MOVIES",
    Hide: {
      right: [
        "دانلود فیلم",
        "۲۵۰ فیلم برتر تاریخ",
        "جدول باکس آفیس",
        "فیلم های بزودی",
        "فیلم های ۳ بعدی",
      ],
      left: [
        "فیلم های دارای پخش آنلاین",
        "دانلود انیمیشن",
        "فیلم های دوبله فارسی",
        "سینمای هند",
      ],
      url: `${joker}`,
    },
  },
  {
    icon: <LiveTvOutlinedIcon />,
    top: "دانلود سریال",
    bottom: "SERIES",
    Hide: {
      right: [
        "دانلود سریال‌",
        "۲۵۰ سریال برتر تاریخ",
        "پربازدیدترین سریال ها",
        "سریال ها پایان یافته",
        "سریال های کره ای",
        "مینی سریال",
      ],
      left: [
        "سریال ها دارای پخش آنلاین",
        "برترین سریال های قرن ۲۱",
        "سریال کنسل شده",
        "سریال های دوبله فارسی",
        "سریال های انیمیشنی",
        "انیمه",
      ],
      url: `${fire}`,
    },
  },
  {
    icon: <TheaterComedyOutlinedIcon />,
    top: "هنرمندان",
    bottom: "ARTISTS",
    Hide: {
      right: ["برترین بازیگران مرد", "برترین کارگردانان"],
      left: ["برترین بازیگران زن", "اخبار سینما و هنرمندان"],
      url: `${dikap}`,
    },
  },
  {
    icon: <HeadsetMicOutlinedIcon />,
    top: "تماس با ما",
    bottom: "CONTACT",
  },
];
export default listHeaderBottom;
