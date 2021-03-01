interface Country {
    name: string,
    active: number;
    deaths: number;
    recovered: number,
    confirmed: number,
    last_updated_by_source_at: Date;
}

export default Country;