export const titleFromRouteName = (routeName: any) => {
  const parts = routeName.split('_')
  return parts.reduce((carry: string, part: string, index: number) => {
    if (index > 0) {
      carry += ' '
    }
    return carry + part[0].toUpperCase() + part.slice(1);
  }, '');
}

export const formatDate = function (dateString: string): string {
  const date = new Date(dateString)
  const _ = {
    y: date.getFullYear(),
    M: date.getMonth() + 1,
    d: date.getDate(),
    H: date.getHours(),
    m: date.getMinutes()
  }
  return `${_["y"]}年${_["M"]}月${_["d"]}日 ${_["H"]}時${_["m"]}分`
}
