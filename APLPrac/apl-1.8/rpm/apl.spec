
%define _tmppath   /home/bob/Desktop/WorkSpace/FourthPracticeBucket/APLPrac/apl-1.8/rpm
%define _rpmtopdir /home/bob/Desktop/WorkSpace/FourthPracticeBucket/APLPrac/apl-1.8/rpm
%define _builddir  /home/bob/Desktop/WorkSpace/FourthPracticeBucket/APLPrac/apl-1.8
%define _rpmdir    /home/bob/Desktop/WorkSpace/FourthPracticeBucket/APLPrac/apl-1.8/rpm/RPMS
%define _sourcedir /home/bob/Desktop/WorkSpace/FourthPracticeBucket/APLPrac/apl-1.8
%define _specdir   /home/bob/Desktop/WorkSpace/FourthPracticeBucket/APLPrac/apl-1.8
%define _srcrpmdir /home/bob/Desktop/WorkSpace/FourthPracticeBucket/APLPrac/apl-1.8/rpm/SRPMS
%define _tmpdir    /tmp
%define _buildrootdir /home/bob/Desktop/WorkSpace/FourthPracticeBucket/APLPrac/apl-1.8/rpm/BUILDROOT


###############################################################################
#
# Package header
#
Summary:      An APL interpreter
Name:         apl
Version:      1.8
Release:      0
Group:        Applications/Interpreters
Source:       file:///home/bob/Desktop/WorkSpace/FourthPracticeBucket/APLPrac/apl-1.8/apl-1.8.tar.gz
Distribution: Ubuntu
Vendor:       Dr. Jürgen Sauermann
License:      GPL
Packager:     Dr. Jürgen Sauermann <juergen.sauermann@t-online.de>

###############################################################################
#
# Description.
#
%description
An APL interpreter (mostly) according to ISO/IEC Standard 13751
aka. "Programming Language APL, Extended"

###############################################################################
#
# preparation for build
#
%prep

###############################################################################
#
# build
#
%build
%configure
make

###############################################################################
#
# install
#
%install
rm -rf %{buildroot}
make DESTDIR=%{buildroot} install

###############################################################################
#
# what is being installed
#
%files
%defattr(-,root,root,-)

%{_bindir}/AP100
%{_bindir}/AP210
%{_bindir}/APserver
%{_bindir}/apl

%{_libdir}/apl/*.0
%{_libdir}/apl/*.so
%{_libdir}/apl/*.a
%{_libdir}/apl/*.la
%{_libdir}/apl/workspaces/*.apl
%{_libdir}/apl/wslib3/*.apl
%{_libdir}/apl/wslib4/*.apl
%{_libdir}/apl/wslib5/*.apl
%{_libdir}/apl/wslib5/APLComponentFiles/*
%{_libdir}/apl/wslib5/iso-apl-cf/*

%{_sysconfdir}/gnu-apl.d/parallel_thresholds
%{_sysconfdir}/gnu-apl.d/preferences
%{_sysconfdir}/gnu-apl.d/keyboard1.txt

%doc AUTHORS
%doc README
%doc README-1-prerequisites
%doc README-2-configure
%doc README-3-keyboard
%doc README-4-compliance
%doc README-5-WINDOWS
%doc README-6-porting
%doc README-7-more-info
%doc README-8-parallel
%doc support-files/
%doc support-files/apl.vim
%doc support-files/old-Keyboard/apl.loadkeys
%doc support-files/old-Keyboard/apl.xkb
%doc support-files/old-Keyboard/apl.xkm
%doc support-files/old-Keyboard/apl.xmodmap
%doc support-files/old-Keyboard/keyboard.txt
%doc support-files/old-Keyboard/keyboard1.txt
%doc support-files/Dyalog-Keyboard/apl.xmodmap
%doc support-files/Dyalog-Keyboard/keyboard.txt
%doc support-files/Dyalog-Keyboard/keyboard1.txt
%doc support-files/OS-X-Keyboard/MacAplAlt.keylayout
%doc support-files/Unicomp-Keyboard/apl.xkb
%doc support-files/Unicomp-Keyboard/apl.xkb.txt
%doc support-files/Unicomp-Keyboard/Unicomp1.jpg
%doc support-files/Unicomp-Keyboard/Unicomp2.jpg
%doc support-files/WASD-Keyboard/apl.xkb
%doc support-files/WASD-Keyboard/apl.xkb.txt
%doc support-files/WASD-Keyboard/wasd-inkscape-104-paths.svg.zip

%{_docdir}/*
%{_infodir}/*
%{_mandir}/*

###############################################################################
#
# preinstall
#
%pre

###############################################################################
#
# postinstall
#
%post

###############################################################################
#
# pre-remove script
#
%preun

###############################################################################
#
# post-remove script
#
%postun

###############################################################################
#
# verify
#
%verifyscript

