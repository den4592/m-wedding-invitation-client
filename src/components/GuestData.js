const GuestData = ({ guestData }) => {
  const td = guestData.map((data) => {
    return (
      <div key={data.id}>
        <p>{data.name}</p>
        <p>{data.text}</p>
      </div>
    );
  });

  return <div className="guest-data">{td}</div>;
};

export default GuestData;
