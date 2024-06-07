import { Button } from '@ui/components/ui/button';
import { Progress } from '@ui/components/ui/progress';
import { format } from 'date-fns';
import CustomSelectTeam from './custom-team-select';
import { hexToRgb } from '@/utils/hex-to-rgb';

const data = {
  banner_image: '/static/images/home/banner_image.png',
  logo: '/static/images/home/dark_logo.png',
  platform: 'Console',
  region: 'North America',
  title: 'Secured background frame',
  teams: 0,
  prize_pool: 207307,
  start_date: new Date('2024-04-18'),
  end_date: new Date('2024-09-23'),
  color_primary: '#f5851f',
  color_secondary: '#ab5a15',
  color_tertiary: '#d4f7b6',
  game_logo: '/static/images/games/r6s.webp',
  game_name: 'R6',
};

export default function EventInfo(): JSX.Element {
  return (
    <div className="w-full p-6">
      <div className="mt-4 grid w-full grid-cols-2 gap-4">
        <div className="flex flex-col gap-4">
          <div
            className="flex min-h-[100px] flex-col rounded-sm py-6"
            style={{
              backgroundColor: `rgba(${hexToRgb(data.color_primary)?.r}, ${hexToRgb(data.color_primary)?.g}, ${hexToRgb(data.color_primary)?.b}, 0.5)`,
              backgroundImage:
                'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
              boxShadow:
                'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
            }}
          >
            <h4
              className="mb-4 px-4 text-left text-[24px] font-semibold"
              style={{
                color: data.color_primary,
              }}
            >
              Description
            </h4>
            <p className="px-1 text-left leading-relaxed text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, beatae? Placeat
              repudiandae soluta nihil consectetur natus, eum voluptatem vel expedita itaque
              voluptates sunt mollitia quis accusamus! Quod sint unde ab?
            </p>
          </div>
          <div
            className="flex min-h-[100px] flex-col rounded-sm px-4 py-6"
            style={{
              backgroundColor: `rgba(${hexToRgb(data.color_primary)?.r}, ${hexToRgb(data.color_primary)?.g}, ${hexToRgb(data.color_primary)?.b}, 0.5)`,
              backgroundImage:
                'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
              boxShadow:
                'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
            }}
          >
            <h4
              className="mb-2 text-left text-[24px] font-semibold"
              style={{
                color: data.color_primary,
              }}
            >
              Contribute
            </h4>
            <h6 className="mb-2 text-[1.25rem] uppercase">CROWDFUND GOAL: $1000</h6>
            <Progress
              color={data.color_primary}
              value={33}
              className="mb-4 h-1 rounded-none bg-[#7a410f]"
            />
            <Button className="w-fit bg-primary uppercase">Contribute</Button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div
            className="flex min-h-[100px] flex-col rounded-sm px-4 py-6"
            style={{
              backgroundColor: `rgba(${hexToRgb(data.color_primary)?.r}, ${hexToRgb(data.color_primary)?.g}, ${hexToRgb(data.color_primary)?.b}, 0.5)`,
              backgroundImage:
                'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
              boxShadow:
                'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
            }}
          >
            <h4
              className="mb-2 text-left text-[24px] font-semibold"
              style={{
                color: data.color_primary,
              }}
            >
              Registration
            </h4>
            <p className="mb-2 text-[0.875rem]">
              {format(data.start_date, "EEE, dd MMM yyyy HH:mm:ss 'GMT'")}-
              {format(data.end_date, "EEE, dd MMM yyyy HH:mm:ss 'GMT'")}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div
              className="flex min-h-[100px] flex-col rounded-sm px-4 py-6"
              style={{
                backgroundColor: `rgba(${hexToRgb(data.color_primary)?.r}, ${hexToRgb(data.color_primary)?.g}, ${hexToRgb(data.color_primary)?.b}, 0.5)`,
                backgroundImage:
                  'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
                boxShadow:
                  'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
              }}
            >
              <h4
                className="mb-2 text-left text-[24px] font-semibold"
                style={{
                  color: data.color_primary,
                }}
              >
                Game
              </h4>
              <p className="mb-2 text-[0.875rem]">Rainbow six siege</p>
            </div>
            <div
              className="flex min-h-[100px] flex-col rounded-sm px-4 py-6"
              style={{
                backgroundColor: `rgba(${hexToRgb(data.color_primary)?.r}, ${hexToRgb(data.color_primary)?.g}, ${hexToRgb(data.color_primary)?.b}, 0.5)`,
                backgroundImage:
                  'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
                boxShadow:
                  'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
              }}
            >
              <h4
                className="mb-2 text-left text-[24px] font-semibold"
                style={{
                  color: data.color_primary,
                }}
              >
                Platform
              </h4>
              <span className="mb-2 flex h-8 w-fit items-center justify-center rounded-2xl bg-[#ffffff29] px-4 text-[0.8125rem]">
                PC
              </span>
            </div>
            <div
              className="flex min-h-[100px] flex-col rounded-sm px-4 py-6"
              style={{
                backgroundColor: `rgba(${hexToRgb(data.color_primary)?.r}, ${hexToRgb(data.color_primary)?.g}, ${hexToRgb(data.color_primary)?.b}, 0.5)`,
                backgroundImage:
                  'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
                boxShadow:
                  'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
              }}
            >
              <h4
                className="mb-2 text-left text-[24px] font-semibold"
                style={{
                  color: data.color_primary,
                }}
              >
                Format
              </h4>
              <p className="mb-2 text-[0.875rem]">2 Divisions Split</p>
            </div>
            <div
              className="flex min-h-[100px] flex-col rounded-sm px-4 py-6"
              style={{
                backgroundColor: `rgba(${hexToRgb(data.color_primary)?.r}, ${hexToRgb(data.color_primary)?.g}, ${hexToRgb(data.color_primary)?.b}, 0.5)`,
                backgroundImage:
                  'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
                boxShadow:
                  'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
              }}
            >
              <h4
                className="mb-2 text-left text-[24px] font-semibold"
                style={{
                  color: data.color_primary,
                }}
              >
                Participants
              </h4>
              <p className="mb-2 text-[0.875rem]">64</p>
            </div>
          </div>
          <div
            className="flex min-h-[100px] flex-col rounded-sm px-4 py-6"
            style={{
              backgroundColor: `rgba(${hexToRgb(data.color_primary)?.r}, ${hexToRgb(data.color_primary)?.g}, ${hexToRgb(data.color_primary)?.b}, 0.5)`,
              backgroundImage:
                'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
              boxShadow:
                'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
            }}
          >
            <p className="mb-2 text-base text-white/70">Select your team</p>
            <CustomSelectTeam />
          </div>
        </div>
      </div>
    </div>
  );
}
