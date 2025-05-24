import multi1 from "../Images/multi1.jpg";
import multi2 from "../Images/multi2.jpg";
import multi3 from "../Images/multi3.jpg";
import multi4 from "../Images/multi4.jpg";
import multi5 from "../Images/multi5.jpg";

export const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 768, min: 240 },
        items: 1,
    },
    small: {
        breakpoint: { max: 240, min: 0 },
        items: 1,
    },
};

export const productresponsive = {
	desktop: {
	  breakpoint: { max: 4000, min: 464 },
	  items: 1,
	},
	mobile: {
	  breakpoint: { max: 464, min: 0 },
	  items: 1,
	}
  };

export let multi_carousel = [
    {
        id: 1,
        image: multi1,
    },
    {
        id: 2,
        image: multi2,
    },
    {
        id: 3,
        image: multi3,
    },
    {
        id: 4,
        image: multi4,
    },
    {
        id: 5,
        image: multi5,
    },
];