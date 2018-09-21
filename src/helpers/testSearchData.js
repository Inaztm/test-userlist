
export default ({ general, job, address, contact }) => {
  return [
    general.firstName,
    general.lastName,
    job.company,
    job.title,
    contact.email,
    contact.phone,
    address.country,
    address.city,
    address.street,
    address.zipCode
  ];
}
