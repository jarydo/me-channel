import type { ChannelType } from "../types/ChannelType";

export default function Channel({
  channelData,
  isMobile,
}: {
  channelData: ChannelType;
  isMobile: boolean;
}) {
  const { name, repo, date, img } = channelData;

  const formatDate = (dateString: string) => {
    if (
      !dateString ||
      Date.parse(dateString) >= Date.now() + 7 * 24 * 60 * 60 * 1000
    )
      return "Upcoming...";

    const date = new Date(dateString);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const month = months[date.getMonth()];
    const day = date.getDate() + 1;

    return <b>{`Releases ${month} ${day}`}</b>;
  };

  return Date.parse(date) <= Date.now() ? (
    <div
      className={
        isMobile
          ? "rounded-[16px] h-20 w-20 p-3 bg-white border-2 border-[#C3C3C3]"
          : "rounded-[20px] h-40 border-4 border-[#C3C3C3] bg-[#F7F7F7] transition-all duration-300 hover:border-[#36BFED] hover:shadow-[0_0_20px_rgba(54,191,237,0.5)] overflow-hidden"
      }
      key={name}
      onClick={() => (window.location.href = repo)}
    >
      <img
        src={`/channel_assets/${img}`}
        alt={name}
        className="w-full h-full object-cover"
      />
    </div>
  ) : (
    <div
      className={
        isMobile
          ? "rounded-[16px] h-20 w-20 p-3 bg-white border-2 border-[#C3C3C3] text-sm"
          : "flex items-center h-40 justify-center rounded-[20px] border-4 border-[#C3C3C3] bg-[rgb(231_231_231/60%)] text-[rgb(121_121_121/50%)] text-[20px]"
      }
      key={name}
    >
      {formatDate(date)}
    </div>
  );
}
