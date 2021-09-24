interface Props {
	prop: string;
}

export const Shared = ({ prop }: Props) => {
	return <div>hey {prop}</div>;
};
