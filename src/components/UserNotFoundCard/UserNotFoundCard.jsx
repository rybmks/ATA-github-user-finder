import AlertSvg from '../../assets/alert-error.svg';
import Card from '../Card/Card';

function UserNotFoundCard() {
  return (
    <Card>
      <div className="flex flex-col items-center lg:text-3xl md:text-1xl m-3">
        <img src={AlertSvg} alt="Alert" />
        <h2 className="mx-auto">User not found</h2>
      </div>
    </Card>
  );
}

export default UserNotFoundCard;
