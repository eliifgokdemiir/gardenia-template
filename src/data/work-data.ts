//home one work image
import { StaticImageData } from "next/image";
import workIconOne from "../../public/assets/img/icon/work-icon1.png";
import workIconTwo from "../../public/assets/img/icon/work-icon2.png";
import workIconThree from "../../public/assets/img/icon/work-icon3.png";
import workIconFour from "../../public/assets/img/icon/work-icon4.png";

//data type
interface Twork {
    id:number,
    workImg :StaticImageData,
    workTitle:string,
    workDesc:string,
    workClass:string
}
export const homeOneWorkItems:Twork[] = [
    {
        id: 1,
        workImg : workIconOne,
        workTitle : 'Garden Design',
        workDesc : 'Whether you are looking for plants, trees, shrubs or garden',
        workClass : 'process-flow-border',
    },
    {
        id: 2,
        workImg : workIconTwo,
        workTitle : 'soil filtering',
        workDesc : 'Whether you are looking for plants, trees, shrubs or garden',
        workClass : 'process-flow-border',
    },
    {
        id: 3,
        workImg : workIconThree,
        workTitle : 'ready to plant',
        workDesc : 'Whether you are looking for plants, trees, shrubs or garden',
        workClass : 'process-flow-border',
    },
    {
        id: 4,
        workImg : workIconFour,
        workTitle : 'using soil medic',
        workDesc : 'Whether you are looking for plants, trees, shrubs or garden',
        workClass : 'process-flow-border d-none',
    }
]