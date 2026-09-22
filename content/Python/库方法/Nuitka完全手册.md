---
标题: "使用 Nuitka 将 Python 代码编译为本机可执行文件：性能、资源、跨平台的完美结合"
笔记ID: H87AAAK
笔记类型: page
星标: false
tags: 
域名: mp.weixin.qq.com
域名2: qq.com
作者: "峰哥Python笔记"
原文链接: "http://mp.weixin.qq.com/s?__biz=MzI5NTM0ODc5Mw==&mid=2247486352&idx=1&sn=d0eb94ed7094a265304929137b49c34f&chksm=ec55b4c6db223dd0b58a8fa09fad32034ea9933e79b3ad3eb92a9dfb233ba9a4d524dbd5bb38&mpshare=1&scene=24&srcid=0206GZs7zV1tJKazhUuKI6ks&sharer_shareinfo=8513456a43485fb1d4c5306930b4122b&sharer_shareinfo_first=8513456a43485fb1d4c5306930b4122b#rd"
五彩链接: "https://marker.dotalk.cn/#/?noteidx=H87AAAK"
划线数量: 0
创建时间: 2024-02-19 17:53
更新时间: 2024-02-19 17:59
---

## 使用 Nuitka 将 Python 代码编译为本机可执行文件：性能、资源、跨平台的完美结合 


## 页面笔记


## 划线列表

## 全文剪藏
 艾美克 Mankiw.Xu  峰哥Python笔记 

Nuitka 是一个用于将 Python 代码编译成 C 或 C++ 代码的工具。它的主要功能是将 Python 代码转换为本机二进制可执行文件，从而提供更好的性能和资源利用率。以下是 Nuitka 的主要功能和用法，以及各个版本间的区别：

### 1\. **功能**：

1. **编译 Python 代码**：`Nuitka` 可以将 `Python` 代码编译成本机可执行文件，这样你可以在没有 `Python` 解释器的情况下运行你的 `Python` 程序。
2. **性能优化**：编译后的程序通常比解释执行的 `Python` 代码运行得更快，因为它们是本机代码，无需解释器的中间步骤。
3. **资源优化**：编译后的程序通常更小，占用更少的内存和存储空间，因为它们不需要包含 `Python` 解释器或标准库。
4. **支持多版本 Python**：Nuitka 支持多个 Python 版本，包括 Python 2.x 和 Python 3.x。
5. **支持多平台**：它可以用于多个操作系统，包括 Windows、Linux 和 macOS。

### 2\. **用法**：

1. **安装 Nuitka**：首先，你需要安装 Nuitka。你可以使用 pip 安装它：

`pip install nuitka==1.0.6  
`

以下内容全部基于1.0.6版本，版本不同，命令也略有区别。

1. **Nuitka环境gcc安装**

参考内容：

> 1. https://blog.csdn.net/wenxingchen/article/details/128112544
> 2. https://zhuanlan.zhihu.com/p/133303836 (`Mankiw.Xu`大佬编写，`Mankiw.Xu`大佬管理Nuitka与Python交流群，致力于推广Nuitka。)

安装gcc编译器，下载`64位 winlibs-x86_64-posix-seh-gcc-11.3.0-llvm-14..zip`!\[\[Pasted image 20230919084728.png\]\] 解压缩，加入到系统路径，`win11`\-`设置`\-`系统`\-`系统信息`\-`高级设置`\-`环境变量`\-`用户变量`，选上`path`编辑，把解压缩后的`bin`路径加入到系统路径。 !\[\[Pasted image 20230919085714.png\]\] !\[\[Pasted image 20230919085736.png\]\] 设置好后，在`cmd`下运行

`gcc.exe --version  
`

`gcc.exe (MinGW-W64 x86_64-posix-seh, built by Brecht Sanders) 11.3.0  
Copyright (C) 2021 Free Software Foundation, Inc.  
This is free software; see the source for copying conditions.  There is NO  
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  
`

gcc编译器安装成功。 3\. **编译 Python 代码**：使用以下命令编译 Python 代码：

`nuitka your_script.py  
`

### 3\. **Nuitka基本用法**

`nuitka --help`帮助文件

`Options:  
  --version             show program's version number and exit  
  -h, --help            show this help message and exit  
  --module              Create an extension module executable instead of a  
                        program. Defaults to off.  
  --standalone          Enable standalone mode for output. This allows you to  
                        transfer the created binary to other machines without  
                        it using an existing Python installation. This also  
                        means it will become big. It implies these option: "--  
                        follow-imports" and "--python-flag=no_site". Defaults  
                        to off.  
  --onefile             On top of standalone mode, enable onefile mode. This  
                        means not a folder, but a compressed executable is  
                        created and used. Defaults to off.  
  --python-debug        Use debug version or not. Default uses what you are  
                        using to run Nuitka, most likely a non-debug version.  
  --python-flag=FLAG    Python flags to use. Default is what you are using to  
                        run Nuitka, this enforces a specific mode. These are  
                        options that also exist to standard Python executable.  
                        Currently supported: "-S" (alias "no_site"),  
                        "static_hashes" (do not use hash randomization),  
                        "no_warnings" (do not give Python runtime warnings),  
                        "-O" (alias "no_asserts"), "no_docstrings" (do not use  
                        doc strings), "-u" (alias "unbuffered") and "-m".  
                        Default empty.  
  --python-for-scons=PATH  
                        If using Python3.3 or Python3.4, provide the path of a  
                        Python binary to use for Scons. Otherwise Nuitka can  
                        use what you run Nuitka with or a Python installation  
                        from Windows registry. On Windows Python 3.5 or higher  
                        is needed. On non-Windows, Python 2.6 or 2.7 will do  
                        as well.

  Control the warnings to be given by Nuitka:  
    --warn-implicit-exceptions  
                        Enable warnings for implicit exceptions detected at  
                        compile time.  
    --warn-unusual-code  
                        Enable warnings for unusual code detected at compile  
                        time.  
    --assume-yes-for-downloads  
                        Allow Nuitka to download external code if necessary,  
                        e.g. dependency walker, ccache, and even gcc on  
                        Windows. To disable, redirect input from nul device,  
                        e.g. "</dev/null" or "<NUL:". Default is to prompt.  
    --nowarn-mnemonic=MNEMONIC  
                        Disable warning for a given mnemonic. These are given  
                        to make sure you are aware of certain topics, and  
                        typically point to the Nuitka website. The mnemonic is  
                        the part of the URL at the end, without the HTML  
                        suffix. Can be given multiple times and accepts shell  
                        pattern. Default empty.

  Control the inclusion of modules and packages in result:  
    --include-package=PACKAGE  
                        Include a whole package. Give as a Python namespace,  
                        e.g. "some_package.sub_package" and Nuitka will then  
                        find it and include it and all the modules found below  
                        that disk location in the binary or extension module  
                        it creates, and make it available for import by the  
                        code. To avoid unwanted sub packages, e.g. tests you  
                        can e.g. do this "--nofollow-import-to=*.tests".  
                        Default empty.  
    --include-module=MODULE  
                        Include a single module. Give as a Python namespace,  
                        e.g. "some_package.some_module" and Nuitka will then  
                        find it and include it in the binary or extension  
                        module it creates, and make it available for import by  
                        the code. Default empty.  
    --include-plugin-directory=MODULE/PACKAGE  
                        Include also the code found in that directory,  
                        considering as if they are each given as a main file.  
                        Overrides all other inclusion options. You ought to  
                        prefer other inclusion options, that go by names,  
                        rather than filenames, as this always includes too  
                        much, and find things through being in "sys.path". Can  
                        be given multiple times. Default empty.  
    --include-plugin-files=PATTERN  
                        Include into files matching the PATTERN. Overrides all  
                        other follow options. Can be given multiple times.  
                        Default empty.  
    --prefer-source-code  
                        For already compiled extension modules, where there is  
                        both a source file and an extension module, normally  
                        the extension module is used, but it should be better  
                        to compile the module from available source code for  
                        best performance. If not desired, there is --no-  
                        prefer-source-code to disable warnings about it.  
                        Default off.

  Control the following into imported modules:  
    --follow-stdlib     Also descend into imported modules from standard  
                        library. This will increase the compilation time by a  
                        lot. Defaults to off.  
    --nofollow-imports  When --nofollow-imports is used, do not descend into  
                        any imported modules at all, overrides all other  
                        inclusion options. Defaults to off.  
    --follow-imports    When --follow-imports is used, attempt to descend into  
                        all imported modules. Defaults to off.  
    --follow-import-to=MODULE/PACKAGE  
                        Follow to that module if used, or if a package, to the  
                        whole package. Can be given multiple times. Default  
                        empty.  
    --nofollow-import-to=MODULE/PACKAGE  
                        Do not follow to that module name even if used, or if  
                        a package name, to the whole package in any case,  
                        overrides all other options. Can be given multiple  
                        times. Default empty.

  Data files:  
    --include-package-data=PACKAGE  
                        Include data files of the given package name. Can use  
                        patterns. By default Nuitka does not unless hard coded  
                        and vital for operation of a package. This will  
                        include all non-DLL, non-extension modules in the  
                        distribution. Default empty.  
    --include-data-files=DESC  
                        Include data files by filenames in the distribution.  
                        There are many allowed forms. With '

--include-data-  
                        files=/path/to/file/*.txt=folder_name/some.txt' it  
                        will copy a single file and complain if it's multiple.  
                        With '--include-data-  
                        files=/path/to/files/*.txt=folder_name/' it will put  
                        all matching files into that folder. For recursive  
                        copy there is a form with 3 values that '--include-  
                        data-files=/path/to/scan=folder_name=**/*.txt' that  
                        will preserve directory structure. Default empty.  
    --include-data-dir=DIRECTORY  
                        Include data files from complete directory in the  
                        distribution. This is recursive. Check '--include-  
                        data-files' with patterns if you want non-recursive  
                        inclusion. An example would be '--include-data-  
                        dir=/path/some_dir=data/some_dir' for plain copy, of  
                        the whole directory. All files are copied, if you want  
                        to exclude files you need to remove them beforehand,  
                        or use '--noinclude-data-files' option to remove them.  
                        Default empty.  
    --noinclude-data-files=PATTERN  
                        Do not include data files matching the filename  
                        pattern given. This is against the target filename,  
                        not source paths. So ignore file pattern from package  
                        data for "package_name" should be matched as  
                        "package_name/*.txt". Default empty.

  DLL files:  
    --noinclude-dlls=PATTERN  
                        Do not include DLL files matching the filename pattern  
                        given. This is against the target filename, not source  
                        paths. So ignore a DLL "someDLL" contained in the  
                        package "package_name" it should be matched as  
                        "package_name/someDLL.*". Default empty.

  Immediate execution after compilation:  
    --run               Execute immediately the created binary (or import the  
                        compiled module). Defaults to off.  
    --debugger, --gdb   Execute inside a debugger, e.g. "gdb" or "lldb" to  
                        automatically get a stack trace. Defaults to off.  
    --execute-with-pythonpath  
                        When immediately executing the created binary ('--  
                        execute'), don't reset 'PYTHONPATH' environment. When  
                        all modules are successfully included, you ought to  
                        not need PYTHONPATH anymore.

  Dump options for internal tree:  
    --xml               Dump the final result of optimization as XML, then  
                        exit.

  Compilation choices:  
    --user-package-configuration-file=USER_YAML  
                        User provided Yaml file with package configuration.  
                        You can include DLLs, remove bloat, add hidden  
                        dependencies. Check User Manual for a complete  
                        description of the format to use. Can be given  
                        multiple times. Defaults to empty.  
    --disable-bytecode-cache  
                        Do not reuse dependency analysis results for modules,  
                        esp. from standard library, that are included as  
                        bytecode.  
    --full-compat       Enforce absolute compatibility with CPython. Do not  
                        even allow minor deviations from CPython behavior,  
                        e.g. not having better tracebacks or exception  
                        messages which are not really incompatible, but only  
                        different or worse. This is intended for tests only  
                        and should *not* be used.  
    --file-reference-choice=MODE  
                        Select what value "__file__" is going to be. With  
                        "runtime" (default for standalone binary mode and  
                        module mode), the created binaries and modules, use  
                        the location of themselves to deduct the value of  
                        "__file__". Included packages pretend to be in  
                        directories below that location. This allows you to  
                        include data files in deployments. If you merely seek  
                        acceleration, it'

s better for you to use the  
                        "original" value, where the source files location will  
                        be used. With "frozen" a notation "<frozen  
                        module_name>" is used. For compatibility reasons, the  
                        "__file__" value will always have ".py" suffix  
                        independent of what it really is.  
    --module-name-choice=MODE  
                        Select what value "__name__" and "__package__" are  
                        going to be. With "runtime" (default for module mode),  
                        the created module uses the parent package to deduce  
                        the value of "__package__", to be fully compatible.  
                        The value "original" (default for other modes) allows  
                        for more static optimization to happen, but is  
                        incompatible for modules that normally can be loaded  
                        into any package.

  Output choices:  
    -o FILENAME         Specify how the executable should be named. For  
                        extension modules there is no choice, also not for  
                        standalone mode and using it will be an error. This  
                        may include path information that needs to exist  
                        though. Defaults to '<program_name>' on this platform.  
                        .exe  
    --output-dir=DIRECTORY  
                        Specify where intermediate and final output files  
                        should be put. The DIRECTORY will be populated with C  
                        files, object files, etc. Defaults to current  
                        directory.  
    --remove-output     Removes the build directory after producing the module  
                        or exe file. Defaults to off.  
    --no-pyi-file       Do not create a ".pyi" file for extension modules  
                        created by Nuitka. This is used to detect implicit  
                        imports. Defaults to off.

  Debug features:  
    --debug             Executing all self checks possible to find errors in  
                        Nuitka, do not use for production. Defaults to off.  
    --unstriped         Keep debug info in the resulting object file for  
                        better debugger interaction. Defaults to off.  
    --profile           Enable vmprof based profiling of time spent. Not  
                        working currently. Defaults to off.  
    --internal-graph    Create graph of optimization process internals, do not  
                        use for whole programs, but only for small test cases.  
                        Defaults to off.  
    --trace-execution   Traced execution output, output the line of code  
                        before executing it. Defaults to off.  
    --recompile-c-only  This is not incremental compilation, but for Nuitka  
                        development only. Takes existing files and simply  
                        compile them as C again. Allows compiling edited C  
                        files for quick debugging changes to the generated  
                        source, e.g. to see if code is passed by, values  
                        output, etc, Defaults to off. Depends on compiling  
                        Python source to determine which files it should look  
                        at.  
    --generate-c-only   Generate only C source code, and do not compile it to  
                        binary or module. This is for debugging and code  
                        coverage analysis that doesn't waste CPU. Defaults to  
                        off. Do not think you can use this directly.  
    --experimental=FLAG  
                        Use features declared as 'experimental'. May have no  
                        effect if no experimental features are present in the  
                        code. Uses secret tags (check source) per experimented  
                        feature.  
    --low-memory        Attempt to use less memory, by forking less C  
                        compilation jobs and using options that use less  
                        memory. For use on embedded machines. Use this in case  
                        of out of memory problems. Defaults to off.  
    --disable-dll-dependency-cache  
                        Disable the dependency walker cache. Will result in  
                        much longer times to create the distribution folder,  
                        but might be used in case the cache is suspect to  
                        cause errors.  
    --force-dll-dependency-cache-update  
                        For an update of the dependency walker cache. Will  
                        result in much longer times to create the distribution  
                        folder, but might be used in case the cache is suspect  
                        to cause errors or known to need an update.

  Backend C compiler choice:  
    --clang             Enforce the use of clang. On Windows this requires a  
                        working Visual Studio version to piggy back on.  
                        Defaults to off.  
    --mingw64           Enforce the use of MinGW64 on Windows. Defaults to  
                        off.  
    --msvc=MSVC_VERSION  
                        Enforce the use of specific MSVC version on Windows.  
                        Allowed values are e.g. "14.3" (MSVC 2022) and other  
                        MSVC version numbers, specify "list" for a list of  
                        installed compilers, or use "latest".  Defaults to  
                        latest MSVC being used if installed, otherwise MinGW64  
                        is used.  
    -j N, --jobs=N      Specify the allowed number of parallel C compiler  
                        jobs. Defaults to the system CPU count.  
    --lto=choice        Use link time optimizations (MSVC, gcc, clang).  
                        Allowed values are "yes", "no", and "auto" (when it'

s  
                        known to work). Defaults to "auto".  
    --static-libpython=choice  
                        Use static link library of Python. Allowed values are  
                        "yes", "no", and "auto" (when it's known to work).  
                        Defaults to "auto".  
    --disable-ccache    Do not attempt to use ccache (gcc, clang, etc.) or  
                        clcache (MSVC, clangcl).

  PGO compilation choices:  
    --pgo               Enables C level profile guided optimization (PGO), by  
                        executing a dedicated build first for a profiling run,  
                        and then using the result to feedback into the C  
                        compilation. Note: This is experimental and not  
                        working with standalone modes of Nuitka yet. Defaults  
                        to off.  
    --pgo-args=PGO_ARGS  
                        Arguments to be passed in case of profile guided  
                        optimization. These are passed to the special built  
                        executable during the PGO profiling run. Default  
                        empty.  
    --pgo-executable=PGO_EXECUTABLE  
                        Command to execute when collecting profile  
                        information. Use this only, if you need to launch it  
                        through a script that prepares it to run. Default use  
                        created program.

  Tracing features:  
    --quiet             Disable all information outputs, but show warnings.  
                        Defaults to off.  
    --show-scons        Operate Scons in non-quiet mode, showing the executed  
                        commands. Defaults to off.  
    --show-progress     Provide progress information and statistics. Defaults  
                        to off.  
    --no-progressbar    Disable progress bar. Defaults to off.  
    --show-memory       Provide memory information and statistics. Defaults to  
                        off.  
    --show-modules      Provide information for included modules and DLLs  
                        Defaults to off.  
    --show-modules-output=PATH  
                        Where to output --show-modules, should be a filename.  
                        Default is standard output.  
    --report=COMPILATION_REPORT_FILENAME  
                        Report module, data file, compilation details in an  
                        XML output file. Default is off.  
    --verbose           Output details of actions taken, esp. in  
                        optimizations. Can become a lot. Defaults to off.  
    --verbose-output=PATH  
                        Where to output --verbose, should be a filename.  
                        Default is standard output.

  General OS controls:  
    --disable-console, --macos-disable-console, --windows-disable-console  
                        When compiling for Windows or macOS, disable the  
                        console window and create a GUI application. Defaults  
                        to off.  
    --enable-console    When compiling for Windows or macOS, enable the  
                        console window and create a console application. This  
                        disables hints from certain modules, e.g. "PySide"  
                        that suggest to disable it. Defaults to true.  
    --force-stdout-spec=FORCE_STDOUT_SPEC, --windows-force-stdout-spec=FORCE_STDOUT_SPEC  
                        Force standard output of the program to go to this  
                        location. Useful for programs with disabled console  
                        and programs using the Windows Services Plugin of  
                        Nuitka commercial. Defaults to not active, use e.g.  
                        '

%PROGRAM%.out.txt', i.e. file near your program.  
    --force-stderr-spec=FORCE_STDERR_SPEC, --windows-force-stderr-spec=FORCE_STDERR_SPEC  
                        Force standard error of the program to go to this  
                        location. Useful for programs with disabled console  
                        and programs using the Windows Services Plugin of  
                        Nuitka commercial. Defaults to not active, use e.g.  
                        '%PROGRAM%.err.txt', i.e. file near your program.

  Windows specific controls:  
    --windows-icon-from-ico=ICON_PATH  
                        Add executable icon. Can be given multiple times for  
                        different resolutions or files with multiple icons  
                        inside. In the later case, you may also suffix with  
                        #<n> where n is an integer index starting from 1,  
                        specifying a specific icon to be included, and all  
                        others to be ignored.  
    --windows-icon-from-exe=ICON_EXE_PATH  
                        Copy executable icons from this existing executable  
                        (Windows only).  
    --onefile-windows-splash-screen-image=SPLASH_SCREEN_IMAGE  
                        When compiling for Windows and onefile, show this  
                        while loading the application. Defaults to off.  
    --windows-uac-admin  
                        Request Windows User Control, to grant admin rights on  
                        execution. (Windows only). Defaults to off.  
    --windows-uac-uiaccess  
                        Request Windows User Control, to enforce running from  
                        a few folders only, remote desktop access. (Windows  
                        only). Defaults to off.  
    --windows-company-name=WINDOWS_COMPANY_NAME  
                        Name of the company to use in Windows Version  
                        information.  One of file or product version is  
                        required, when a version resource needs to be added,  
                        e.g. to specify product name, or company name.  
                        Defaults to unused.  
    --windows-product-name=WINDOWS_PRODUCT_NAME  
                        Name of the product to use in Windows Version  
                        information. Defaults to base filename of the binary.  
    --windows-file-version=WINDOWS_FILE_VERSION  
                        File version to use in Windows Version information.  
                        Must be a sequence of up to 4 numbers, e.g. 1.0.0.0,  
                        only this format is allowed. One of file or product  
                        version is required, when a version resource needs to  
                        be added, e.g. to specify product name, or company  
                        name. Defaults to unused.  
    --windows-product-version=WINDOWS_PRODUCT_VERSION  
                        Product version to use in Windows Version information.  
                        Must be a sequence of up to 4 numbers, e.g. 1.0.0.0,  
                        only this format is allowed. One of file or product  
                        version is required, when a version resource needs to  
                        be added, e.g. to specify product name, or company  
                        name. Defaults to unused.  
    --windows-file-description=WINDOWS_FILE_DESCRIPTION  
                        Description of the file use in Windows Version  
                        information.  One of file or product version is  
                        required, when a version resource needs to be added,  
                        e.g. to specify product name, or company name.  
                        Defaults to nonsense.  
    --onefile-tempdir-spec=ONEFILE_TEMPDIR_SPEC  
                        Use this as a temporary folder. Defaults to  
                        '

%TEMP%\onefile_%PID%_%TIME%', i.e. system temporary  
                        directory.

  macOS specific controls:  
    --macos-target-arch=MACOS_TARGET_ARCH  
                        What architectures is this to supposed to run on.  
                        Default and limit is what the running Python allows  
                        for. Default is "native" which is the architecture the  
                        Python is run with.  
    --macos-create-app-bundle  
                        When compiling for macOS, create a bundle rather than  
                        a plain binary application. Currently experimental and  
                        incomplete. Currently this is the only way to unlock  
                        disabling of console.Defaults to off.  
    --macos-app-icon=ICON_PATH  
                        Add icon for the application bundle to use. Can be  
                        given only one time. Defaults to Python icon if  
                        available.  
    --macos-signed-app-name=MACOS_SIGNED_APP_NAME  
                        Name of the application to use for macOS signing.  
                        Follow "com.YourCompany.AppName" naming results for  
                        best results, as these have to be globally unique, and  
                        will potentially grant protected API accesses.  
    --macos-app-name=MACOS_APP_NAME  
                        Name of the product to use in macOS bundle  
                        information. Defaults to base filename of the binary.  
    --macos-sign-identity=MACOS_APP_VERSION  
                        When signing on macOS, by default an ad-hoc identify  
                        will be used, but with this option your get to specify  
                        another identity to use. The signing of code is now  
                        mandatory on macOS and cannot be disabled. Default "-"  
                        if not given, which means ad-hoc.  
    --macos-app-version=MACOS_APP_VERSION  
                        Product version to use in macOS bundle information.  
                        Defaults to "1.0" if not given.  
    --macos-app-protected-resource=RESOURCE_DESC  
                        Request access for macOS protected resources, e.g.  
                        "NSMicrophoneUsageDescription:Microphone access for  
                        recording audio." requests access to the microphone  
                        and provides an informative text for the user, why  
                        that is needed. Before the colon, is an OS identifier  
                        for an access right, then the informative text. Legal  
                        values can be found on https://developer.apple.com/doc  
                        umentation/bundleresources/information_property_list/p  
                        rotected_resources and the option can be specified  
                        multiple times. Default empty.

  Linux specific controls:  
    --linux-icon=ICON_PATH, --linux-onefile-icon=ICON_PATH  
                        Add executable icon for onefile binary to use. Can be  
                        given only one time. Defaults to Python icon if  
                        available.

  Plugin control:  
    --enable-plugin=PLUGIN_NAME, --plugin-enable=PLUGIN_NAME  
                        Enabled plugins. Must be plug-in names. Use --plugin-  
                        list to query the full list and exit. Default empty.  
    --disable-plugin=PLUGIN_NAME, --plugin-disable=PLUGIN_NAME  
                        Disabled plugins. Must be plug-in names. Use --plugin-  
                        list to query the full list and exit. Default empty.  
    --plugin-no-detection  
                        Plugins can detect if they might be used, and the you  
                        can disable the warning via "--disable-plugin=plugin-  
                        that-warned", or you can use this option to disable  
                        the mechanism entirely, which also speeds up  
                        compilation slightly of course as this detection code  
                        is run in vain once you are certain of which plugins  
                        to use. Defaults to off.  
    --plugin-list       Show list of all available plugins and exit. Defaults  
                        to off.  
    --user-plugin=PATH  The file name of user plugin. Can be given multiple  
                        times. Default empty.  
    --show-source-changes  
                        Show source changes to original Python file content  
                        before compilation. Mostly intended for developing  
                        plugins. Default False.

  Plugin anti-bloat:  
    --show-anti-bloat-changes  
                        Annotate what changes are by the plugin done.  
    --noinclude-setuptools-mode=NOINCLUDE_SETUPTOOLS_MODE  
                        What to do if a '

setuptools' or import is encountered.  
                        This package can be big with dependencies, and should  
                        definitely be avoided. Also handles 'setuptools_scm'.  
    --noinclude-pytest-mode=NOINCLUDE_PYTEST_MODE  
                        What to do if a 'pytest' import is encountered. This  
                        package can be big with dependencies, and should  
                        definitely be avoided. Also handles 'nose' imports.  
    --noinclude-unittest-mode=NOINCLUDE_UNITTEST_MODE  
                        What to do if a unittest import is encountered. This  
                        package can be big with dependencies, and should  
                        definitely be avoided.  
    --noinclude-IPython-mode=NOINCLUDE_IPYTHON_MODE  
                        What to do if a IPython import is encountered. This  
                        package can be big with dependencies, and should  
                        definitely be avoided.  
    --noinclude-default-mode=NOINCLUDE_DEFAULT_MODE  
                        This actually provides the default "warning" value for  
                        above options, and can be used to turn all of these  
                        on.  
    --noinclude-custom-mode=CUSTOM_CHOICES  
                        What to do if a specific import is encountered. Format  
                        is module name, which can and should be a top level  
                        package and then one choice, "error", "warning",  
                        "nofollow", e.g. PyQt5:error.  
`

#### 4\. 命令

参考内容：

> https://blog.csdn.net/qq\_40597070/article/details/130919454

`Usage: __main__.py [--module] [--run] [options] main_module.py

Options:  
--help                  显示此帮助消息并退出  
--version               显示错误报告的版本信息和重要详细信息，然后退出。默认为关闭。  
--module                创建一个可执行的扩展模块，而不是一个程序。默认为关闭。  
--standalone            为输出启用独立模式。这允许您在不使用现有Python安装的情况下将创建的二进制文件传输到其他机器。这也意味着它将变得更大。它暗示了以下选项："--follow imports"和"--python flag=no_site"。默认为关闭。  
--onefile               在独立模式之上，启用onefile模式。这意味着不是一个文件夹，而是一个压缩的可执行文件被创建和使用。默认为关闭。  
--python-debug          是否使用调试版本。Default使用您正在使用的来运行Nuitka，很可能是非调试版本。  
--python-flag=FLAG      要使用的Python标志。默认值是您用来运行Nuitka的内容，这会强制执行特定的模式。这些选项也存在于标准Python可执行文件中。当前支持："-S"（别名"no_site"）、"static_hashes"（不使用哈希随机化）、"no_warnings"（不给出Python运行时警告）、"-O"（别名为"no_assels"）、"no_docstring"（不使用文档字符串）、"-u"（别名为"unbuffered"）和"-m"。默认为空。  
--python-for-scons=PATH  如果使用Python3.3或Python3.4，请提供用于Scons的Python二进制文件的路径。否则，Nuitka可以使用您运行Nuitka的软件，也可以使用Windows注册表中的Python安装。在Windows上，需要Python 3.5或更高版本。在非Windows上，Python 2.6或2.7也可以。

`

#### 5\. 常用选项

`--mingw64 #默认为已经安装的vs2017去编译，否则就按指定的比如mingw(官方建议)  
--standalone 独立环境，这是必须的(否则拷给别人无法使用)  
--windows-disable-console 没有CMD控制窗口  
--output-dir=out 生成exe到out文件夹下面去  
--show-progress 显示编译的进度，很直观  
--show-memory 显示内存的占用  
--enable-plugin=pyside6  打包pyside6模块的刚需  
--plugin-enable=tk-inter 打包tkinter模块的刚需  
--plugin-enable=numpy 打包numpy,pandas,matplotlib模块的刚需  
--plugin-enable=torch 打包pytorch的刚需  
--plugin-enable=tensorflow 打包tensorflow的刚需  
--windows-icon-from-ico=你的.ico 软件的图标  
--windows-company-name=Windows下软件公司信息  
--windows-product-name=Windows下软件名称  
--windows-file-version=Windows下软件的信息  
--windows-product-version=Windows下软件的产品信息  
--windows-file-description=Windows下软件的作用描述  
--windows-uac-admin=Windows下用户可以使用管理员权限来安装  
--linux-onefile-icon=Linux下的图标位置  
--onefile 像pyinstaller打包成单个exe文件  
--include-package=复制比如numpy,PyQt5 这些带文件夹的叫包或者轮子  
--include-module=复制比如when.py 这些以.py结尾的叫模块  
–-include-package-data=包含给定软件包名称中的数据文件，等号后软件包名称。有的时候Nuitka并不能正确分析出一些Python软件包所需要使用的数据文件，在运行程序时提示FileNotFoundError等错误，此时就需要使用该选项。如：--include-package-data=ultralytics  
–-include-data-files= 按文件名包含数据文件，等号后的格式为<SRC=DEST>。SRC指的是文件夹的路径，DEST指的是文件夹相对于打包结果的路径，其中DEST只能使用相对路径。如：--include-data-files=/Users/admin/Downloads/yolov5n.pt=./yolov5n.pt  
-–include-data-dir= 包含文件夹中的数据文件，等号后的格式为<SRC=DEST>。使用方法与--include-data-files=相同。  
--follow-import-to=MODULE/PACKAGE    如果使用该模块，请遵循该模块；如果是一个包，请遵循整个包。可以多次给定。默认为空。`

#### 6\. 其他

1. **输出目录**：通过 `-o` 或 `--output-dir` 参数指定输出目录，将编译后的文件保存到该目录。

`nuitka --output-dir=dist your_script.py  
`

1. **生成单个可执行文件**：使用 `--standalone` 参数生成单个独立的可执行文件，不依赖于外部 Python 安装。

`nuitka --standalone your_script.py  
`

1. **生成 C 代码**：使用 `--python-flag=-Py_ssize_t` 参数生成 C 代码而不是可执行文件。

`nuitka --python-flag=-Py_ssize_t your_script.py  
`

1. **指定 Python 版本**：通过 `--python-version` 参数指定要使用的 Python 版本。

`nuitka --python-version=3.8 your_script.py  
`

1. **生成 Python 语法检查**：使用 `--warn-implicit-exceptions` 参数生成 Python 语法检查。

`nuitka --warn-implicit-exceptions your_script.py  
`

1. **忽略文件**：通过 `--nofollow-import-to=module_name` 参数指定要忽略的导入。

`nuitka --nofollow-import-to=module_name your_script.py  
`

1. **指定目标平台**：使用 `--target-platform` 参数指定目标平台（例如，linux、win32、darwin 等）。

`nuitka --target-platform=linux your_script.py  
`

1. **指定目标架构**：使用 `--target-arch` 参数指定目标架构（例如，x86、x86\_64、arm 等）。

`nuitka --target-arch=x86_64 your_script.py  
`

1. **编译模式**：使用 `--debug` 参数生成调试模式的可执行文件，以便进行调试。

`nuitka --debug your_script.py  
`

1. **生成依赖文件**：使用 `--recurse-to` 参数指定要包括在生成的可执行文件中的依赖文件。

`nuitka --recurse-to=module_name your_script.py  
`

1. **自定义编译器选项**：使用 `--compiler-options` 参数添加自定义编译器选项。

`nuitka --compiler-options=-O2 your_script.py  
`

这些是一些常用的 Nuitka 参数，你可以根据自己的需求和项目来选择适合的参数来自定义编译过程。可以使用 `nuitka --help` 命令来查看所有可用参数及其详细说明。

### 7\. 编译过程实例

参考内容：

> 1. https://jwndv2g391c.feishu.cn/wiki/GWDdwze3HifHbCkR2tBcH8Imnog

有一段代码，比较简单的`PyQt6`的导入内容，主程序为`main.py`：

`import sys  
sys.path

from PyQt6.QtWidgets import (QApplication, QWidget, QVBoxLayout, QHBoxLayout,   
                            QPushButton,QTableWidget, QTableWidgetItem, QDateEdit,   
                            QLabel, QLineEdit, QFileDialog,QTextEdit, QHeaderView,  
                            QMessageBox,QComboBox,QCheckBox,QMainWindow, QStatusBar)  
from PyQt6.QtCore import Qt, QThread, pyqtSignal, QDate  
from openpyxl import Workbook  
import numpy as np  
import datetime  
import os  
import cx_Oracle  
import threading  
import PyQt6  
from PyQt6.QtGui import QTextCursor  
from PyQt6 import QtWidgets,QtGui  
from openpyxl import Workbook  
from openpyxl.styles import Alignment, Font,Border, Side,PatternFill  
from openpyxl.utils import get_column_letter  
import csv

`

#### 第一步：

开始的编译命令：

`nuitka --standalone --mingw64 --show-progress --show-memory --nofollow-import-to=openpyxl --enable-plugin=pyqt6,numpy --windows-icon-from-ico=./icon/icons8-twitter-240.png --output-dir=out main.py  
`

* `--nofollow-import-to`为不编译，直接跳过的内容，运行程序时直接把代码copy过来，可以节省时间，而且不容易出错。
* `--enable-plugin`为可选插件，可以用`nuitka --plugin-list`命令来查看插件列表。
* `--windows-icon-from-ico`为图标。
* `--output-dir`为文件输出路径。
* `--show-progress`编译过程显示进度。

编译过程中，界面如下

![](https://g1proxy.wimg.site/sA9xewwRELUef5Qje1dHaus-_KHzETkBOD_Dl5PeA2X4/https://mmbiz.qpic.cn/mmbiz_jpg/HbAkIiaswicK5XNRSX9ibe1W8ZDibEG057IpXjbzOVP7ByaiaWrzjKESNSqX5Y37uBHFuSPZicrVA7lpQ5uzOYxEhWjg/640?wx_fmt=jpeg)

比如，最下面进度条，右侧有numpy.core.overrides等等内容，这时就终止Ctrl+C编译，把输入的命令调整为：

`nuitka --standalone --mingw64 --show-progress --show-memory --nofollow-import-to=openpyxl,numpy --enable-plugin=pyqt6,numpy --windows-icon-from-ico=./icon/icons8-twitter-240.png --output-dir=out main.py  
`

意思就是`numpy`包不需要编译。再次运行修改后的命令，把不需要编译的都加到这个列表，最后几轮下来，命令变为：

`nuitka --standalone --mingw64 --show-progress --show-memory --nofollow-import-to=openpyxl,threading,cx_Oracle,scipy,matplotlib,pptx,urllib3,requests,http,email,multiprocessing,dateutil --enable-plugin=pyqt6,numpy --windows-icon-from-ico=./icon/icons8-twitter-240.png --output-dir=out main.py  
`

这个反复调试过程，是尽量不让编译器编译代码，节省时间，也不容易出错。编译代码修改到这个程度，编译过程大概7-8分钟左右。编译过程跑完。编译好的文件，存放在`out/main.dist/`路径下，文件名是去掉py，为exe文件，我这个编译为`main.exe`。

#### 第二步

在`cmd`下到这个目录下，运行这个`main.exe`，他会提示缺少`openpyxl`包，到你虚拟环境所在目录搜索`openpyxl`，我的虚拟环境目录为` D:\work\statistics\main\myenv>`，使用everything，搜索这个目录下的`openpyxl`，

![](https://g1proxy.wimg.site/sdj1tY0llv4PgOpuU8MZvB-F-zzmEmPqDRkwIegr6qOE/https://mmbiz.qpic.cn/mmbiz_png/HbAkIiaswicK5XNRSX9ibe1W8ZDibEG057IpMLDCKAa9J5oIm4gfJfuciaY0aI3qJAcpCvY814O452kn03PucHmgrXw/640?wx_fmt=png)

![](https://g1proxy.wimg.site/sHTd3rhBhGz2N_JNLfNHzT-566oNxFmgzXip9hXfZyIc/https://mmbiz.qpic.cn/mmbiz_png/HbAkIiaswicK5XNRSX9ibe1W8ZDibEG057IpyygvibmZ9obGwc6ytNW7TVDiag0w9d8fAkyPwu6APjicSvntzuVhicCHsw/640?wx_fmt=png)

复制`openpyxl`这个文件夹到`out/main.dist/`到这个目录下，也就是`main.exe`这个文件所在的目录，`copy`好后，再次运行`main.exe`，提示缺那个包，再去搜索，`copy`，直接这个编译的程序可运行起来。这一套全跑下来，至少半个小时到一个小时。

我编译这个`PyQt6`文件，提示`pandas`缺东西：

`Traceback (most recent call last):  
  File "D:\work\STATIS~1\main\out\ok\main.py", line 23, in <module>  
  File "D:\work\STATIS~1\main\out\ok\pandas\__init__.py", line 45, in <module pandas>  
ImportError: C extension: pandas.compat not built. If you want to import pandas from the source directory, you may need to run 'python setup.py build_ext' to build the C extensions first.  
(car) PS D:\work\statistics\main\out\ok> .\main.exe  
Traceback (most recent call last):  
  File "D:\work\STATIS~1\main\out\ok\pandas\__init__.py", line 36, in <module pandas>  
    from pandas.compat import (  
ModuleNotFoundError: No module named 'pandas.compat'

The above exception was the direct cause of the following exception:

Traceback (most recent call last):  
  File "D:\work\STATIS~1\main\out\ok\main.py", line 23, in <module>  
  File "D:\work\STATIS~1\main\out\ok\pandas\__init__.py", line 45, in <module pandas>  
    ) from _err  
ImportError: C extension: pandas.compat not built. If you want to import pandas from the source directory, you may need to run 'python setup.py build_ext' to build the C extensions first.

`

到`pandas`在目录，没有`setup.py`文件，去github下载源代码，去编译，又提示要安装`Microsoft Visual C++ 14.0`。

`D:\work\statistics\main\myenv\lib\site-packages\setuptools\dist.py:320: InformationOnly: Normalizing '2.2.0dev0+229.g7b4df5a0b7' to '2.2.0.dev0+229.g7b4df5a0b7' self.metadata.version = self._normalize_version( running build_ext building 'pandas._libs.algos' extension error: Microsoft Visual C++ 14.0 or greater is required. Get it with "Microsoft C++ Build Tools": https://visualstudio.microsoft.com/visual-cpp-build-tools/  
`

把这个安装工具安装上，再编译，`pandas`搞定，再跑以上代码，才一步步搞定，第一次运行`nuitka`，花了一小天的时间，编译出来，文件大小80多M，比pyinstaller小很多，兼容性也好一些。

安装过程主要参考了3个文章，1个视频，群里的`Mankiw.Xu`大佬指导，这个视频也是由`Mankiw.Xu`大佬提供，本次代码编译过程全部参考其视频完成，非常感谢。

###### 参考内容：

> 1. https://zhuanlan.zhihu.com/p/133303836
> 2. https://www.zhihu.com/column/c\_1245860717607686144
> 3. https://blog.csdn.net/wenxingchen/article/details/128112544
> 4. https://blog.csdn.net/qq\_40597070/article/details/130919454
> 5. https://jwndv2g391c.feishu.cn/wiki/GWDdwze3HifHbCkR2tBcH8Imnog

### PyQt6学习交流群

组建了**PyQt6学习交流群**有3个多月了，大家积极交流，现在有300多位参与者，群内高手云集，有很多都有成熟作品，让我们借鉴，让我受益良多。群比较松散，开放进入就会比较乱，现在进群只能邀请，如果需要进群，加下面微信，拉进群。群内会不定期发放些学习材料、代码、视频等。![](https://g1proxy.wimg.site/sj8Qzqdb59FDpvUL3bpYEYaP_OO-SQiC6M3YUULPxiAg/https://mmbiz.qpic.cn/mmbiz_jpg/HbAkIiaswicK5XNRSX9ibe1W8ZDibEG057IpEc44qj3ibJcxozK7gAZaNFLbibQic1Tib1AcyztlYosfYVZsW1iaibEjbZwQ/640?wx_fmt=jpeg)
