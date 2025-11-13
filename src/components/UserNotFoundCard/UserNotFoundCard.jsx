import AlertSvg from '../../assets/alert-error.svg';
import Card from '../Card/Card';

/**
 * UserNotFoundCard - Component that displays an alert icon and a "User not found" message inside a Card.
 *
 * This stateless functional component accepts no props.
 *
 * @component
 * @returns {JSX.Element} The rendered UserNotFoundCard component.
 */
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
