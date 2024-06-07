import OrganiserItem from '../pages/organizer/organizer-item';

const data = [
  { label: 'eurogames', tagline: 'awesome gaming' },
  { label: 'eurogames', tagline: 'awesome gaming' },
];

export default function ManageOrganization() {
  return (
    <div className="flex min-h-[400px] flex-col justify-start gap-2">
      {data.length > 0 ? (
        <div className="flex flex-col justify-start gap-4">
          {data.map((event, i) => (
            <OrganiserItem key={`item-${i}`} data={event} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center py-4 text-white">
          <p>No Event organizers</p>
        </div>
      )}
    </div>
  );
}
