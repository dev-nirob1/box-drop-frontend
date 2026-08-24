import Heading from '../ui/Heading';
import Paragraph from '../ui/Paragraph';

const StatCard = ({item}) => {
    const {label, value, icon:Icon} = item
    return (
        <div
            key={label}
            className="flex items-center gap-4 rounded-md border border-secondary/10 bg-white p-4"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded bg-accent/10">
              <Icon className="text-2xl text-accent" />
            </div>
            <div>
              <Heading as={3}>
                {value}
              </Heading>
              <Paragraph>{label}</Paragraph>
            </div>
          </div>
    );
};

export default StatCard;