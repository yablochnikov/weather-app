import { FC } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { ArcElement, Chart as ChartJS } from 'chart.js';
interface UVIndexChatProps {
  uvIndex?: number;
}
const UVIndexChart: FC<UVIndexChatProps> = ({ uvIndex }) => {
  ChartJS.register(ArcElement);

  const percent = (uvIndex as number) / 12;
  const data = {
    labels: [],

    datasets: [
      {
        data: [percent * 12, 12 - percent * 12],
        backgroundColor: ['#FBDA4C', '#f6f6f8'],
      },
    ],
    options: {
      rotation: 270,
      circumference: 180,
      cutout: 70,
    },
  };

  return (
    <Doughnut
      data={data}
      style={{
        width: 140,
        height: 70,
        position: 'absolute',
        bottom: '-25px',
      }}
      options={data.options}
    />
  );
};

export default UVIndexChart;
