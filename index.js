const driver = {}

function updateDriverWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]:, value })
}

function destructivelyUpdateDriverWithKeyAndValue() {}

function deleteFromDriverByKey() {}

function destructivelyDeleteFromDriverByKey() {}
