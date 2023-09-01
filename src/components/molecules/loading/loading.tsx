import {Spin} from "antd";
import {StyledLoading} from "./loading.styled";

export default function BoardLoading() {
    return (
        <StyledLoading>
            <Spin size={"large"}/>
        </StyledLoading>
    )
}