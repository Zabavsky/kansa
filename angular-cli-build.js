(

  function () {

    return new Angular2App(defaults, {
      vendorNpmFiles: [

      ],
      sassCompiler: {
        includePaths: [
          'src/app/style'
        ]
      }
    })

  }
)();