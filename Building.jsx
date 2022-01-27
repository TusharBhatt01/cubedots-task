import React from "react";
import '../index.css';
import { DropdownButton, Dropdown } from "react-bootstrap";
import TestUnitData from "./TestUnitData";
import TestFilter from "./TestFilter.json";
let k = [
    {
        "ID": "c09f400c-891c-e811-80cf-000c295875c6",
        "uniqueID": 715907,
        "availability": "not available",
        "bedroom": "3+1",
        "view": "",
        "layout": "3+1",
        "floor": "3.KAT",
        "aptNo": "11",
        "grossm2": "240.34",
        "netAream2": "0",
        "direction": "",
        "blockNew": "B BLOK",
        "price": "16001000",
        "blockMap": "",
        "apartment_id": "XYZ_1_B_3_11"
    },
    {
        "ID": "c09f400c-891c-e811-80cf-000c295875c6",
        "uniqueID": 715908,
        "availability": "not available",
        "bedroom": "3+1",
        "view": "",
        "layout": "3+1",
        "floor": "3.KAT",
        "aptNo": "12",
        "grossm2": "241.43",
        "netAream2": "0",
        "direction": "",
        "blockNew": "B BLOK",
        "price": "16071000",
        "blockMap": "",
        "apartment_id": "XYZ_1_B_3_12"
    },
    {
        "ID": "c09f400c-891c-e811-80cf-000c295875c6",
        "uniqueID": 715909,
        "availability": "available",
        "bedroom": "4+1",
        "view": "",
        "layout": "4+1",
        "floor": "3.KAT",
        "aptNo": "13",
        "grossm2": "399.88",
        "netAream2": "0",
        "direction": "",
        "blockNew": "B BLOK",
        "price": "28660000",
        "blockMap": "",
        "apartment_id": "XYZ_1_B_3_13"
    },
    {
        "ID": "c09f400c-891c-e811-80cf-000c295875c6",
        "uniqueID": 715910,
        "availability": "available",
        "bedroom": "6+1 DUBLEKS",
        "view": "",
        "layout": "6+1 DUBLEKS",
        "floor": "4.KAT",
        "aptNo": "14",
        "grossm2": "644.52",
        "netAream2": "0",
        "direction": "",
        "blockNew": "B BLOK",
        "price": "46945000",
        "blockMap": "",
        "apartment_id": "XYZ_1_B_4_14"
    },
    {
        "ID": "c09f400c-891c-e811-80cf-000c295875c6",
        "uniqueID": 715911,
        "availability": "not available",
        "bedroom": "3+1",
        "view": "",
        "layout": "3+1",
        "floor": "4.KAT",
        "aptNo": "15",
        "grossm2": "232.51",
        "netAream2": "0",
        "direction": "",
        "blockNew": "B BLOK",
        "price": "15783000",
        "blockMap": "",
        "apartment_id": "XYZ_1_B_4_15"
    },
    {
        "ID": "c09f400c-891c-e811-80cf-000c295875c6",
        "uniqueID": 715912,
        "availability": "not available",
        "bedroom": "3+1",
        "view": "",
        "layout": "3+1",
        "floor": "4.KAT",
        "aptNo": "16",
        "grossm2": "232.67",
        "netAream2": "0",
        "direction": "",
        "blockNew": "B BLOK",
        "price": "15794000",
        "blockMap": "",
        "apartment_id": "XYZ_1_B_4_16"
    },
    {
        "ID": "c09f400c-891c-e811-80cf-000c295875c6",
        "uniqueID": 715913,
        "availability": "not available",
        "bedroom": "4+1",
        "view": "",
        "layout": "4+1",
        "floor": "4.KAT",
        "aptNo": "17",
        "grossm2": "396.36",
        "netAream2": "0",
        "direction": "",
        "blockNew": "B BLOK",
        "price": "29017000",
        "blockMap": "",
        "apartment_id": "XYZ_1_B_4_17"
    },
    {
        "ID": "c09f400c-891c-e811-80cf-000c295875c6",
        "uniqueID": 715970,
        "availability": "available",
        "bedroom": "2+1",
        "view": "",
        "layout": "2+1",
        "floor": "1.KAT",
        "aptNo": "08",
        "grossm2": "229.11",
        "netAream2": "0",
        "direction": "",
        "blockNew": "D BLOK",
        "price": "14216000",
        "blockMap": "",
        "apartment_id": "XYZ_1_D_1_08"
    },
    {
        "ID": "c09f400c-891c-e811-80cf-000c295875c6",
        "uniqueID": 715971,
        "availability": "available",
        "bedroom": "2+1",
        "view": "",
        "layout": "2+1",
        "floor": "2.KAT",
        "aptNo": "09",
        "grossm2": "225.27",
        "netAream2": "0",
        "direction": "",
        "blockNew": "D BLOK",
        "price": "14243000",
        "blockMap": "",
        "apartment_id": "XYZ_1_D_2_09"
    },
    {
        "ID": "c09f400c-891c-e811-80cf-000c295875c6",
        "uniqueID": 715972,
        "availability": "not available",
        "bedroom": "2+1",
        "view": "",
        "layout": "2+1",
        "floor": "2.KAT",
        "aptNo": "10",
        "grossm2": "128.33",
        "netAream2": "0",
        "direction": "",
        "blockNew": "D BLOK",
        "price": "8187000",
        "blockMap": "",
        "apartment_id": "XYZ_1_D_2_10"
    },
    {
        "ID": "c09f400c-891c-e811-80cf-000c295875c6",
        "uniqueID": 715973,
        "availability": "available",
        "bedroom": "2+1",
        "view": "",
        "layout": "2+1",
        "floor": "2.KAT",
        "aptNo": "11",
        "grossm2": "248.59",
        "netAream2": "0",
        "direction": "",
        "blockNew": "D BLOK",
        "price": "15744000",
        "blockMap": "",
        "apartment_id": "XYZ_1_D_2_11"
    },
    {
        "ID": "c09f400c-891c-e811-80cf-000c295875c6",
        "uniqueID": 715974,
        "availability": "available",
        "bedroom": "5+1 DUBLEKS ",
        "view": "",
        "layout": "5+1 DUBLEKS",
        "floor": "3.KAT",
        "aptNo": "12",
        "grossm2": "492.43",
        "netAream2": "0",
        "direction": "",
        "blockNew": "D BLOK",
        "price": "32905000",
        "blockMap": "",
        "apartment_id": "XYZ_1_D_3_12"
    },
    {
        "ID": "c09f400c-891c-e811-80cf-000c295875c6",
        "uniqueID": 715975,
        "availability": "available",
        "bedroom": "3+1",
        "view": "",
        "layout": "3+1",
        "floor": "3.KAT",
        "aptNo": "13",
        "grossm2": "292.29",
        "netAream2": "0",
        "direction": "",
        "blockNew": "D BLOK",
        "price": "18881000",
        "blockMap": "",
        "apartment_id": "XYZ_1_D_3_13"
    },
    {
        "ID": "c09f400c-891c-e811-80cf-000c295875c6",
        "uniqueID": 715976,
        "availability": "available",
        "bedroom": "3+1",
        "view": "",
        "layout": "3+1",
        "floor": "4.KAT",
        "aptNo": "14",
        "grossm2": "315.43",
        "netAream2": "0",
        "direction": "",
        "blockNew": "D BLOK",
        "price": "20398000",
        "blockMap": "",
        "apartment_id": "XYZ_1_D_4_14"
    },
    {
        "ID": "c09f400c-891c-e811-80cf-000c295875c6",
        "uniqueID": 715870,
        "availability": "available",
        "bedroom": "1+1",
        "view": "",
        "layout": "1+1",
        "floor": "1.KAT",
        "aptNo": "01",
        "grossm2": "105.89",
        "netAream2": "0",
        "direction": "",
        "blockNew": "A BLOK",
        "price": "7150000",
        "blockMap": "",
        "apartment_id": "XYZ_1_A_1_01"
    },
    {
        "ID": "c09f400c-891c-e811-80cf-000c295875c6",
        "uniqueID": 715871,
        "availability": "not available",
        "bedroom": "1+1",
        "view": "",
        "layout": "1+1",
        "floor": "1.KAT",
        "aptNo": "02",
        "grossm2": "85.16",
        "netAream2": "0",
        "direction": "",
        "blockNew": "A BLOK",
        "price": "5308000",
        "blockMap": "",
        "apartment_id": "XYZ_1_A_1_02"
    },
    {
        "ID": "c09f400c-891c-e811-80cf-000c295875c6",
        "uniqueID": 715872,
        "availability": "not available",
        "bedroom": "2+1",
        "view": "",
        "layout": "2+1",
        "floor": "1.KAT",
        "aptNo": "03",
        "grossm2": "118.29",
        "netAream2": "0",
        "direction": "",
        "blockNew": "A BLOK",
        "price": "8143000",
        "blockMap": "",
        "apartment_id": "XYZ_1_A_1_03"
    },
    {
        "ID": "c09f400c-891c-e811-80cf-000c295875c6",
        "uniqueID": 715873,
        "availability": "available",
        "bedroom": "1+1",
        "view": "",
        "layout": "1+1",
        "floor": "2.KAT",
        "aptNo": "04",
        "grossm2": "106.18",
        "netAream2": "0",
        "direction": "",
        "blockNew": "A BLOK",
        "price": "7240000",
        "blockMap": "",
        "apartment_id": "XYZ_1_A_2_04"
    },
    {
        "ID": "c09f400c-891c-e811-80cf-000c295875c6",
        "uniqueID": 715874,
        "availability": "not available",
        "bedroom": "1+1",
        "view": "",
        "layout": "1+1",
        "floor": "2.KAT",
        "aptNo": "05",
        "grossm2": "85.13",
        "netAream2": "0",
        "direction": "",
        "blockNew": "A BLOK",
        "price": "4731000",
        "blockMap": "",
        "apartment_id": "XYZ_1_A_2_05"
    },
    {
        "ID": "c09f400c-891c-e811-80cf-000c295875c6",
        "uniqueID": 715875,
        "availability": "not available",
        "bedroom": "2+1",
        "view": "",
        "layout": "2+1",
        "floor": "2.KAT",
        "aptNo": "06",
        "grossm2": "118.68",
        "netAream2": "0",
        "direction": "",
        "blockNew": "A BLOK",
        "price": "8246000",
        "blockMap": "",
        "apartment_id": "XYZ_1_A_2_06"
    },
    {
        "ID": "c09f400c-891c-e811-80cf-000c295875c6",
        "uniqueID": 715876,
        "availability": "available",
        "bedroom": "1+1",
        "view": "",
        "layout": "1+1",
        "floor": "3.KAT",
        "aptNo": "07",
        "grossm2": "105.53",
        "netAream2": "0",
        "direction": "",
        "blockNew": "A BLOK",
        "price": "7264000",
        "blockMap": "",
        "apartment_id": "XYZ_1_A_3_07"
    },

]
export default class Building extends React.Component {
    constructor(props) {
        super(props)


    }
    state = {
        data: k
    }


    newdata = () => {
        let i = document.getElementById("selected").value
        let updateddata = this.state.data;
        if (i == 0) {
            const result = this.state.data.filter((item) => {
                return item.price>=0 && item.price <= 10000000;
            })
            this.setState({ data: result })
        }
       else if(i==1){
        const result = this.state.data.filter((item) => {
            return item.price>=10000000 && item.price <=20000000 ;
        })
        this.setState({ data: result })
       }
       else if(i==2){
        const result = this.state.data.filter((item) => {
            return item.price>=20000000 && item.price <=30000000 ;
        })
        this.setState({ data: result })
       }
       else if(i==3){
        const result = this.state.data.filter((item) => {
            return item.price>=30000000 && item.price <=40000000 ;
        })
        this.setState({ data: result })
       }
       else if(i==4){
        const result = this.state.data.filter((item) => {
            return item.price>=40000000 && item.price <=50000000 ;
        })
        this.setState({ data: result })
       }
    }
    newdata1 = () => {
        let i = document.getElementById("selected1").value
        let updateddata = this.state.data;
        if (i == 0) {
            const result = this.state.data.filter((item) => {
                return item.floor=1;
            })
            this.setState({ data: result })
        }
       else if(i==1){
        const result = this.state.data.filter((item) => {
            return item.floor=2 ;
        })
        this.setState({ data: result })
       }
       else if(i==2){
        const result = this.state.data.filter((item) => {
            return item.floor=3 ;
        })
        this.setState({ data: result })
       }
       else if(i==3){
        const result = this.state.data.filter((item) => {
            return item.floor=4 ;
        })
        this.setState({ data: result })
       }
       else if(i==4){
        const result = this.state.data.filter((item) => {
            return item.floor=5 ;
        })
        this.setState({ data: result })
       }
    }
    newdata2 = () => {
        let i = document.getElementById("selected2").value
        let updateddata = this.state.data;
        if (i == 0) {
            const result = this.state.data.filter((item) => {
                return item.bedroom=1;
            })
            this.setState({ data: result })
        }
       else if(i==1){
        const result = this.state.data.filter((item) => {
            return item.bedroom=2 ;
        })
        this.setState({ data: result })
       }
       else if(i==2){
        const result = this.state.data.filter((item) => {
            return item.bedroom=3 ;
        })
        this.setState({ data: result })
       }
       else if(i==3){
        const result = this.state.data.filter((item) => {
            return item.bedroom=4 ;
        })
        this.setState({ data: result })
       }
       else if(i==4){
        const result = this.state.data.filter((item) => {
            return item.bedroom=5 ;
        })
        this.setState({ data: result })
       }
    }
    newdata3 = () => {
        let i = document.getElementById("selected3").value
        let updateddata = this.state.data;
        if (i == 0) {
            const result = this.state.data.filter((item) => {
                return item.grossm2>=0 && item.grossm2<=100;
            })
            this.setState({ data: result })
        }
       else if(i==1){
        const result = this.state.data.filter((item) => {
            return item.grossm2>=101 && item.grossm2<=200 ;
        })
        this.setState({ data: result })
       }
       else if(i==2){
        const result = this.state.data.filter((item) => {
            return item.grossm2>=201 && item.grossm2<=300 ;
        })
        this.setState({ data: result })
       }
       else if(i==3){
        const result = this.state.data.filter((item) => {
            return item.grossm2>=301 && item.grossm2<=400 ;
        })
        this.setState({ data: result })
       }
       else if(i==4){
        const result = this.state.data.filter((item) => {
        })
        this.setState({ data: result })
       }
    }


    render() {
        console.log(this.state.data);
        return (
            <>
                <div className="mt-4">
                    <select id="selected" onChange={() => this.newdata()}>
                        {TestFilter.prices.map((v, i) => {
                            return (
                                <option value={i}>price: {v}</option>
                            )
                        })}
                    </select>
                    <select id="selected1" onChange={() => this.newdata1()}>
                        {TestFilter.floor.map((v,i) => {
                            return (
                                <option value={i}>floor: {v}</option>
                            )
                        })}
                    </select>
                    <select id="selected2" onChange={() => this.newdata2()}>
                        {TestFilter.bedroom.map((v,i) => {
                            return (
                                <option value={i}>{v}</option>
                            )
                        })}
                    </select>
                    <select id="selected3" onChange={() => this.newdata3()}>
                        {TestFilter.grossm2.map((v,i) => {
                            return (
                                <option value={i}>grossm: {v}</option>
                            )
                        })}
                    </select>
                </div>

                <table className="sty mt-2">
                    <thead>
                        <tr>
                            <th>uniqueID</th>
                            <th>availability</th>
                            <th>bedroom</th>
                            <th>floor</th>
                            <th>aptNo</th>
                            <th>grossm2</th>
                            <th>blockNew</th>
                            <th>price</th>
                            <th>apartment_id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(v => {
                            return (
                                <tr key={v.id}>
                                    <td>{v.uniqueID}</td>
                                    <td>{v.availability}</td>
                                    <td>{parseInt(v.bedroom)}</td>
                                    <td>{parseInt(v.floor)}</td>
                                    <td>{v.aptNo}</td>
                                    <td>{v.grossm2}</td>
                                    <td>{v.blockNew}</td>
                                    <td>{v.price}</td>
                                    <td>{v.apartment_id}</td>
                                </tr>
                            )
                        })}
                    </tbody>

                </table>
            </>
        )
    }
}