const Clock = (newProps) => {
  return (
    <div>
      <h3>Thời gian: {newProps.newDate.toLocaleTimeString()}</h3>
      <h3>Ngày: {newProps.newDate.toLocaleDateString()}</h3>
    </div>
  );
};

export default Clock;
