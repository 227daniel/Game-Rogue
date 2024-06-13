import { ConfigProvider, Input } from "antd"

const CustomInput = ({ className = "" }) => {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Input: {
                        colorBorder: '#ffffff33',
                        activeBorderColor: '#f5831f',
                        hoverBorderColor: '#ffffff33',
                        colorText: "white"
                    },
                }
            }}
        >
            <Input className={className} style={{ backgroundColor: "transparent", height: "50px" }} />
        </ConfigProvider>
    )
}
export default CustomInput