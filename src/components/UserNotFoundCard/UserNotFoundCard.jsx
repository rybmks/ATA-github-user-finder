import AlertSvg from '../../assets/alert-error.svg';
import Card from '../Card/Card';

function UserNotFoundCard() {
  return (
    <Card>
      <div className="flex flex-col items-center lg:text-3xl md:text-1xl m-3">
        <img src={AlertSvg} alt="Alert" className="size-22 md:size-30 lg:size-35" />
        <h2 className="mx-auto">User not found</h2>
      </div>
    </Card>
  );
}

export default UserNotFoundCard;
