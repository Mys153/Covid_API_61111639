import React from 'react';
import styled from 'styled-components';


const ConfirmedSetting = styled.h2 `
    {--width: 670px;
    height: 230px;}  
    padding-top: 30px;
    padding-right: 30px;
    padding-bottom: 0px;
    padding-left: 30px;
    margin-top: -20px;

    border-radius: 10px;
    background: #FF1493; 
`;

const RecoverySetting = styled.h2 `
    padding-top: 30px;
    padding-right: 30px;
    padding-bottom: 0px;
    padding-left: 30px;
    margin-top: -20px;

    border-radius: 10px;
    background: #006633; 
`;

const All = styled.h2 `
    padding-top: 30px;
    padding-right: 30px;
    padding-bottom: 0px;
    padding-left: 30px;
    margin-top: -20px;

    border-radius: 10px;
    background: #20B2AA; 
`;

const Death = styled.h2 `
    padding-top: 30px;
    padding-right: 30px;
    padding-bottom: 0px;
    padding-left: 30px;
    margin-top: -20px;

    border-radius: 10px;
    background: #696969; 
`;

const Title = styled.h1`
    font-size: 0.8em;
    text-align: center;
    color: #fff;
`;

const Setting = styled.div`
    display: flex;
    fles-dirextion: row;
    grid-gap: 0.7rem;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
        'a a a'
        'b c d';

`;

class Covid extends React.Component {
    render(){
        let data = this.props.data;
        return (
            <>
            
            <h1>รายงานสถานการณ์ โควิด-19 </h1>
            อัพเดทข้อมูลล่าสุด : {data.UpdateDate}
            
            <p>
            <ConfirmedSetting>
                <Title>ติดเชื้อสะสม</Title>
                <h6>
                <div>{data.Confirmed}</div>
                <div>(+{data.NewConfirmed})</div>
                </h6>
            </ConfirmedSetting>

            <Setting>
            <RecoverySetting>
                <Title>หายแล้ว</Title>
                <h6>
                <div>{data.Recovered}</div>
                <span>(+{data.NewRecovered})</span>
                </h6>
            </RecoverySetting>

            <All>
            <Title>รักษาอยู่ใน รพ.</Title>
            <h6>
            <div>{data.Hospitalized}</div>
            <div>(+{data.NewHospitalized})</div>
            </h6>
            </All>

            <Death>
            <Title>เสียชีวิต</Title>
            <h6>
            <div>{data.Deaths}</div>
            <div>(+{data.NewDeaths})</div>
            </h6>
            </Death>
            </Setting>

            </p>
            </>
        )
    }
}

export default Covid;