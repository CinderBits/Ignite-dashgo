import { Box, Flex, SimpleGrid , Text, theme} from "@chakra-ui/react";
import { Header } from "../components/Header";
import dynamic from "next/dynamic";
import { Sidebar } from "../components/Sidebar";
import { useState } from "react";

const Chart = dynamic(()=>import('react-apexcharts'),{
    ssr:false
})
const options = {
    chart:{
        toolbar:{
            show:false
        },
        zoom:{
            enabled:false
        },
        foreColor: theme.colors.gray[500]
    },
    grid:{
        show:false
    },
    dataLabels:{
        enabled:false
    },
    stroke:{
        curve:'smooth'
    },
    tooltip:{
        enabled:false
    },
    xaxis:{
        type:'datetime',
        axisBorder:{
            color: theme.colors.gray[600]
        },
        axisTicks:{
            color: theme.colors.gray[600]
        },
        categories:[
            '2022-03-17T00:00:00.000Z',
            '2022-03-18T00:00:00.000Z',
            '2022-03-19T00:00:00.000Z',
            '2022-03-20T00:00:00.000Z',
            '2022-03-21T00:00:00.000Z',
            '2022-03-22T00:00:00.000Z',
            '2022-03-23T00:00:00.000Z',
        ]
    },
    fill:{
        opacity:0.3,
        type:'gradient',
        gradiente:{
            shade:'dark',
            opacityFrom:0.7,
            opacityTo:0.3,
        },
    },  
};

const series = [
    {name:'series1', data:[31,110,20, 80, 144, 18 ,130]}
]

export default function Dashboard() {
    const [showChart, setShowChart] = useState(false);
    setTimeout(() => {
        setShowChart(true);
      }, 1);

    return(
        <Flex flexFlow={'column'}>
            <Header/>

            <Flex direction={'column'} h='100vh'>
                    <Flex w='100%' my='6' maxW={1400} mx='auto' px='6'>
                        <Sidebar />

                        <SimpleGrid flex='1' gap={'4'} minChildWidth='320px' alignItems='flex-start'>
                        {showChart && (
                            <Box p={['6','8']} pb='4'bg='gray.800' borderRadius={8}>
                                <Text fontSize={'lg'} mb='4'>Inscritos da Semana</Text>
                                <Chart options={options} series={series}  type="area" height={160} />
                            </Box>
                            )}
                        
                        {showChart && (
                            <Box p={['6','8']} pb='4' bg='gray.800' borderRadius={8}>
                                <Text fontSize={'lg'} mb='4'>Taxa de abertura</Text>
                                <Chart options={options} series={series}  type="area" height={160} />
                            </Box>
                            )}
                        </SimpleGrid>
                    </Flex>
            </Flex>
        </Flex>
    )
}