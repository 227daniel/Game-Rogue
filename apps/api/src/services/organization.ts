import organizationModel from '../models/organization';

export const getUserOwnedOrganizations = async (userId: string) => {
  const organizations = await organizationModel.find({ userId });
  return organizations;
};

export const checkUserOwnedOrganization = async (userId: string, organizationId: string) => {
  const organization = await organizationModel.findOne({ id: organizationId, userId: userId });
  if (!organization) {
    return false;
  }
  return true;
};
