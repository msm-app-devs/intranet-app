import { helper } from '@ember/component/helper';

export function getById(params/*, hash*/) {
  const teams = params[0];
  const id = params[1];

  const team =  teams.find(team => {
      return team.get('id') === id
  });

  return team.get('optionName');
}

export default helper(getById);
