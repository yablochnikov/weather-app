import { FC } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { ArcElement, Chart as ChartJS } from 'chart.js';
interface UVIndexChatProps {
  uvIndex?: number;
}
const UVIndexChart: FC<UVIndexChatProps> = ({ uvIndex }) => {
  ChartJS.register(ArcElement);

  const percent = (uvIndex as number) / 15;
  const data = {
    labels: [],

    datasets: [
      {
        data: [percent * 15, 15 - percent * 15],
        backgroundColor: ['#F9B903', '#ccc'],
      },
    ],
    options: {
      rotation: 270,
      circumference: 180,
      cutout: 67,
    },
  };

  return (
    <div>
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
    </div>
  );
};

export default UVIndexChart;
