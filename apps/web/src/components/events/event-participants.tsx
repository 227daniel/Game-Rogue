export default function EventParticipants(): JSX.Element {
  return (
    <div className="w-full p-6">
      <div
        className="bg-primary/10 w-full overflow-x-auto rounded-sm text-white"
        style={{
          boxShadow:
            'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
          overflowX: 'auto',
          // backgroundColor: 'rgba(245, 133, 31, 0.1)',
        }}
      ></div>
    </div>
  );
}
