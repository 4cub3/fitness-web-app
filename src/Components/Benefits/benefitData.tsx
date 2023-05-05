import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";


interface BenefitsObject {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const benefits: BenefitsObject[] = [
  {
    id: "0",
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "state of the art facilites",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident",
  },
  {
    id: " 1",
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100% diverse classes",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident vel error tempora dignissimos",
  },
  {
    id: "2",
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and pro trainers",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident vel error tempora dignissimos",
  },

];
