import { FcSupport, FcSportsMode } from "react-icons/fc";
import { VscSymbolOperator } from "react-icons/vsc";
import {
  GiAutoRepair,
  GiBattleGear,
  GiGardeningShears,
  GiMoneyStack,
} from "react-icons/gi";
import { BsClipboard2Heart, BsClipboardHeart, BsFillClipboard2PlusFill, BsFillPersonCheckFill, BsHeart, BsPostcardFill } from "react-icons/bs";
import { ImCommand } from "react-icons/im";
import {
  MdGroups,
  MdEngineering,
  MdOutlineSupportAgent,
  MdOutlineLocalActivity,
} from "react-icons/md";
import { FaPlaceOfWorship, FaUserPlus, FaUsers } from "react-icons/fa";
import { IoManSharp } from "react-icons/io5";
import { TbActivity } from "react-icons/tb";
import { AiFillSchedule } from "react-icons/ai";

const underMenu1 = [
  {
    id: 1,
    title: "آماد",
    icon: <FcSupport className="ml-2 mr-[0.05rem] text-2xl" />,
    redirect: "/AmadSoldiers",
  },
  {
    id: 2,
    title: "فرماندهی",
    icon: <ImCommand className="ml-2 mr-[0.05rem] text-2xl" />,
    redirect: "/CommandSoldiers",
  },
  {
    id: 3,
    title: "عملیات",
    icon: <VscSymbolOperator className="ml-2 mr-[0.05rem] text-2xl" />,
    redirect: "/OperationSoldiers",
  },
  {
    id: 4,
    title: "تعمیرگاه",
    icon: <GiAutoRepair className="ml-2 mr-[0.05rem] text-2xl" />,
    redirect: "/RepairShopSoldiers",
  },
  {
    id: 5,
    title: "گروهان1",
    icon: <MdGroups className="ml-2 mr-[0.05rem] text-2xl" />,
    redirect: "/CompanyOneSoldiers",
  },
  {
    id: 6,
    title: "گروهان2",
    icon: <MdGroups className="ml-2 mr-[0.05rem] text-2xl" />,
    redirect: "/CompanyTwoSoldiers",
  },
  {
    id: 7,
    title: "گروهان3",
    icon: <MdGroups className="ml-2 mr-[0.05rem] text-2xl" />,
    redirect: "/CompanyThreeSoldiers",
  },
  {
    id: 8,
    title: "ادوات",
    icon: <GiBattleGear className="ml-2 mr-[0.05rem] text-2xl" />,
    redirect: "/ToolsSoldiers",
  },
  {
    id: 9,
    title: "قرارگاه",
    icon: <FaPlaceOfWorship className="ml-2 mr-[0.05rem] text-2xl" />,
    redirect: "/CampSoldiers",
  },
  {
    id: 10,
    title: "نیروی انسانی",
    icon: <IoManSharp className="ml-2 mr-[0.05rem] text-2xl" />,
    redirect: "/ManpowerSoldiers",
  },
  {
    id: 11,
    title: "مهندسی",
    icon: <MdEngineering className="ml-2 mr-[0.05rem] text-2xl" />,
    redirect: "/EngineerSoldiers",
  },
  {
    id: 12,
    title: "امور باغبانی",
    icon: <GiGardeningShears className="ml-2 mr-[0.05rem] text-2xl" />,
    redirect: "/HorticulturalSoldiers",
  },
  {
    id: 13,
    title: "تربیت بدنی",
    icon: <FcSportsMode className="ml-2 mr-[0.05rem] text-2xl" />,
    redirect: "/PhysicalEducationSoldiers",
  },
  {
    id: 14,
    title: "مالی",
    icon: <GiMoneyStack className="ml-2 mr-[0.05rem] text-2xl" />,
    redirect: "/FinancialSoldiers",
  },
  {
    id: 15,
    title: "فرهنگی",
    icon: <BsFillPersonCheckFill className="ml-2 mr-[0.05rem] text-2xl" />,
    redirect: "/CalturalSoldiers",
  },
  {
    id: 16,
    title: "نمایندگی",
    icon: <MdOutlineSupportAgent className="ml-2 mr-[0.05rem] text-2xl" />,
    redirect: "/RepresentativeSoldiers",
  },
];

export const underMenu2 = [
  {
    id: 1,
    title: "فعال",
    icon: <MdOutlineLocalActivity className="ml-2 mr-[0.05rem] text-2xl" />,
    redirect: "/ActiveSoldiers",
  },
  {
    id: 2,
    title: "غیرفعال",
    icon: <TbActivity className="ml-2 mr-[0.05rem] text-2xl" />,
    redirect: "/UnActiveSoldiers",
  },
];

export const underMenu3 = [
  {
    id: 1,
    title: "افزودن به آمار",
    icon: <FaUserPlus className="ml-2 mr-[0.05rem] text-2xl" />,
    redirect: "/Soldierinformation",
  },
  {
    id: 2,
    title: "آمارکل",
    icon: <FaUsers className="ml-2 mr-[0.05rem] text-2xl" />,
    redirect: "/Users",
  },
  {
    id: 3,
    title: "آمار سالم",
    icon: <BsHeart className="ml-2 mr-[0.05rem] text-2xl" />,
    redirect: "/HealthySoldiers",
  },
  {
    id: 4,
    title: "آمار گروه الف",
    icon: <BsClipboardHeart className="ml-2 mr-[0.05rem] text-2xl" />,
    redirect: "/GroupOneSoldiers",
  },
  {
    id: 5,
    title: "آمار گروه ب",
    icon: <BsClipboard2Heart className="ml-2 mr-[0.05rem] text-2xl" />,
    redirect: "/GroupTwoSoldiers",
  },
  {
    id: 6,
    title: "آمار معاف از رزم",
    icon: <AiFillSchedule className="ml-2 mr-[0.05rem] text-2xl" />,
    redirect: "/ExemptFromWar",
  },
];


export const underMenu4 = [
  {
    id: 1,
    title: "افزودن لوحه پستی",
    icon: <BsFillClipboard2PlusFill className="ml-2 mr-[0.05rem] text-2xl" />,
    redirect:"/AddCompany"
  },
  {
    id: 2,
    title: "آمار کل لوایح پستی",
    icon: <BsPostcardFill className="ml-2 mr-[0.05rem] text-2xl" />,
    redirect:"/AllLohePosti"
  }
]

export default underMenu1;
