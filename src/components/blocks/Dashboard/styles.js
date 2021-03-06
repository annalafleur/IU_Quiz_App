import styled from "styled-components"
import theme from "../../../styles/theme"


export const Dashboard = styled.div`
    background-image: url("/dashboard-background.png");
    height: 85vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 1400px) {
        height: auto;
    }
`
export const Container = styled.div`
    max-width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 1400px) {
        flex-direction: column;
    }

`
export const NavigationCards = styled.div`
    width: 650px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media(max-width: 800px) {
        width: 100%;
        align-items: center;
        justify-content: center;
    }
`
export const Overview = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    hr {
        width: 100%;
        border: none;
        height: 1px;
        background-color: ${theme.colors.grey};
        margin: 20px 0px;
    }
`

export const CakeChart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 170px;
    p {
        text-align: center;
        font-weight: 300;
        font-size: 14px;
        line-height: 14px;
    }

    @media(max-width: 800px) {
        max-width: 100%;
    }
`

export const CakeCharts = styled.div`
    display: flex;
    justify-content: space-between;
    @media(max-width: 800px) {
        flex-direction: column;
    }
`

export const VerticalLine = styled.div`
    background-color: ${theme.colors.grey};
    width: 1px;
    height: 100px;
    margin: 0px 20px;
    @media(max-width: 800px) {
        width: 100%;
        height: 1px;
        margin: 20px 0px;
    }
`

export const GameOverview = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    width: 100%;
    @media(max-width: 800px) {
        flex-direction: column;
    }
`
export const GameOverviewContainer = styled.div`
    width: 100%;
`

export const SinglePlayOverview = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 20px;
    @media(max-width: 800px) {
        flex-direction: column;
    }
`
export const Amounts = styled.div`
    h5 {
        text-align: center;
        line-height: 29px;
    }
`