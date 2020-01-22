import styled from 'styled-components';

const MergeDivs2 = styled.div`
    width:50%;
    height:250px;
    @media screen and (max-width: 767px) {
    width: 100%;
    }
`;

const MergeDivs = styled.div`
    width:50%;
    height:300px;
    @media screen and (max-width: 767px) {
    width: 100%;
    }
`;

const BImage = styled.div`
    margin:15px 0;
    height: 30rem;
    background-image: url("https://www.mountgrangeheritage.co.uk/wp-content/uploads/2017/10/autumn-leaves-at-sunset-1030x687.jpg");
    background-size: cover;
    background-position: center center;
    text-align: center;
    & a {
        text-align: center;
        align-items: center;
        text-decoration: none;
    }
    & p {
        padding-top: 130px;
        padding-bottom: 40px;
        color: white;
        font-size: 28px;
    }
    & h1 {
        color: white;
        font-size: 32px;
        padding-bottom: 40px;
    }
    & button {
        text-decoration: none;
        background-color: transparent;
        border-color: white;
        color: white;
        border-radius: 50px;
        border: 1px solid;
        width: 150px;
        height: 60px;
    }
`;

const DeatBox = styled.div`
    :hover{
    box-shadow: 0 0 10px #888888
    }
`;

const DeatVal = styled.h2`
    color: #757575;
    font-weight: normal;
    font-size: 20px;
`;

const Deat = styled.h1`
    font-size: 2.5rem;
    color: #3377cc;
    :hover{
    color: lightblue;
    }
`;

const ShareBtn = styled.button`
    color:#d92228;
    background-color:white;
    border-color:#d92228;
    border-radius:15px;
    margin:0 5px;
    :focus{
    outline: none;
    }
    :hover{
        background-color:lightgray;
    }
`;

const AskBtn = styled.button`
    color:white;
    background-color:#d92228;
    border:none;
    border-radius:15px;
    margin:0 5px;
    :focus{
        outline: none;
    }
    :hover{
        background-color:red;
    }
`;

const SignOrLog = styled.div`
    display:flex;
    flex-direction:row;
    background-color:white;
    z-index:99999;
    position:fixed;
    top:30%;
    right:35%;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
    max-width:500px;
    backgroundColor:white;
    text-align:center;
    padding:25px
`;

const SignUpDiv = styled.div`
    display:flex;
    flex-direction:row;
    z-index:99999;
    position:fixed;
    background-color:black;
    opacity:0.9;
    text-align:center;
    justify-content:center;
`;

const BlurDiv = styled.div`
    z-index:9999;
    position:fixed;
    background-color:black;
    opacity:0.9;
    top:0;
    left:0;
    right:0;
    bottom:0;
    display:flex;
    text-align:center;
    justify-content:center;
`;

const FbBtn = styled.button`
    color:white;
    background-color:rgb(57, 88, 155);
    border:none;
    border-radius:15px; 
`;

const LogInBtn = styled.button`
    color:white;
    background-color:red;
    border:none;
    border-radius:15px;
    margin:10px 0;
`;

const SubLinks = styled.a`
    color:white;
    margin: 0 15px;
    :hover{
    text-decoration: none;
    color:white;
    border-bottom:2px solid red}
`;

const ABtn = styled.button`
    border: 1px solid;
    background-color: white;
    border-color: red;
    color: red;
    border-radius: 50px;
    height: 35px;
    width: 150px;
    :hover{
    background-color: lightgray;}
`;

const FBtn = styled.button`
    text-decoration:none;
    margin:0 15px;
    position: sticky;
    top:0;
    z-index:9999;
    background-color:red;
    opacity:0.8;
    border:none;
    border-radius:15px;
`;

const InHeart = styled.a`
    color:red;
    background-color:white;
    border-radius:100%;
    position:absolute;
    z-index:2;
    font-size:40px;
    bottom:-30px;
    left:750px;
    padding:10px 15px;
    box-shadow:-2px 2px 6px rgba(0, 0, 0, 0.4);
    text-decoration:none;
      &:hover, &:focus, &:active {
    text-decoration: none;
    color: red;
    box-shadow:-2px 2px 6px rgba(0, 0, 0, 0.5);
`;

const GreenRect = styled.p`
    font-size:12px;
    color: white;
    background-color:green;
    position:relative;
    left:35px;
    z-index:2;
`;

const BlackRectF = styled.p`
    font-size:12px;
    color: white;
    background-color:black;
    position:relative;
    left:50px;
    z-index:2;
`;

const BlackRectS = styled.p`
    font-size:12px;
    color: white;
    background-color:black;
    position:relative;
    left:60px;
    z-index:2;
`;

const MyDiv = styled.div`
    position: absolute;
    z-index: 9999;
    background-color: #f2f2f2;
    padding: 10px;
`;

const MyBtn = styled.button`
    background: none;
    border-radius: 5px;
    border: 2px solid;
    margin:0 5px;
    background-color:aliceblue;
    :hover{
        border-color:red;
    }
`;

const MyUl = styled.ul`
    list-style: none;
    padding: 10px;
`;

const MyLi = styled.li`
    cursor: pointer;
    :hover{
    color:red}
`;

const BedLi = styled.li`
    border: 1px solid;
    border-radius: 100%;
    // margin: 0 5px;
    font-size: 10px;
    padding: 6px;
    cursor: pointer;
    :hover{
    color:red}
`;

export  {BlurDiv,SignUpDiv,MergeDivs2,MergeDivs,MyUl ,MyLi,BedLi,MyDiv,MyBtn,GreenRect,BlackRectF,BlackRectS,InHeart,FBtn,ABtn,SubLinks,LogInBtn,FbBtn,SignOrLog,AskBtn,ShareBtn,Deat,DeatVal,DeatBox,BImage};